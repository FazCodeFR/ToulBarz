import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import { parseAgenda, useAgenda } from '@/composables/useAgenda'

const future = (hours: number) => new Date(Date.now() + hours * 3_600_000).toISOString()

const item = (over: Record<string, unknown> = {}) => ({
  id: 'e-0123456789abcdef',
  kind: 'event',
  title: 'Exemple fictif',
  description: 'Ligne 1\nLigne 2',
  place: 'Lieu fictif',
  address: null,
  startsAt: future(24),
  endsAt: future(26),
  agendas: { public: true, members: false },
  links: {},
  ...over,
})

const feed = (items: unknown[]) => ({ version: 1, generatedAt: new Date().toISOString(), items })

// Rend ce que le composable expose, comme le fait Event.vue (texte, jamais v-html)
const Probe = defineComponent({
  setup() {
    const agenda = useAgenda()
    return () =>
      h('div', [
        h('span', { class: 'state' }, agenda.hasError.value ? 'error' : 'ok'),
        ...agenda.eventsPublic.value.map((event) => h('p', { class: 'public' }, event.description)),
        ...agenda.eventsMembers.value.map((event) => h('p', { class: 'members' }, event.summary)),
      ])
  },
})

const answer = (body: unknown, ok = true) =>
  vi.fn().mockResolvedValue({ ok, status: ok ? 200 : 503, json: async () => body })

afterEach(() => {
  vi.unstubAllGlobals()
  localStorage.clear()
})

describe('agenda feed', () => {
  test('reads the feed and splits it by agenda', () => {
    const events = parseAgenda(
      feed([item(), item({ id: 's1', kind: 'session', agendas: { public: false, members: true } })]),
    )
    expect(events?.map((event) => [event.id, event.isPublic, event.isMembers])).toEqual([
      ['e-0123456789abcdef', true, false],
      ['s1', false, true],
    ])
    expect(events?.[0]?.location).toBe('Lieu fictif')
    const [withAddress] = parseAgenda(feed([item({ address: '1 rue fictive, Toulouse' })])) ?? []
    expect(withAddress?.location).toBe('Lieu fictif')
    expect(withAddress?.fullAddress).toBe('Lieu fictif, 1 rue fictive, Toulouse')
  })

  test('refuses an unknown format and skips broken items', () => {
    expect(parseAgenda({ version: 2, items: [] })).toBeNull()
    expect(parseAgenda(null)).toBeNull()
    expect(parseAgenda(feed([item({ startsAt: 'nope' }), item({ id: '' })]))).toEqual([])
  })

  test('keeps only https links', () => {
    const [event] = parseAgenda(
      feed([item({ links: { registration: 'javascript:alert(1)', ticketing: 'https://billet.example/a' } })]),
    ) ?? []
    expect(event?.links).toEqual({ ticketing: 'https://billet.example/a' })
  })

  test('shows a hostile description as text, never as markup', async () => {
    vi.stubGlobal('fetch', answer(feed([item({ description: '<img src=x onerror=alert(1)>' })])))
    const wrapper = mount(Probe)
    await flushPromises()
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.public').text()).toBe('<img src=x onerror=alert(1)>')
  })

  test('falls back on the last answer when the feed is down', async () => {
    vi.stubGlobal('fetch', answer(feed([item({ agendas: { public: false, members: true }, title: 'Gardé' })])))
    mount(Probe)
    await flushPromises()
    vi.stubGlobal('fetch', answer({}, false))
    const wrapper = mount(Probe)
    await flushPromises()
    expect(wrapper.find('.state').text()).toBe('ok')
    expect(wrapper.find('.members').text()).toBe('Gardé')
  })

  test('says it failed when there is nothing to fall back on', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))
    const wrapper = mount(Probe)
    await flushPromises()
    expect(wrapper.find('.state').text()).toBe('error')
  })
})
