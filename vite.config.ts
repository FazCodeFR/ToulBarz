import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { unheadVueComposablesImports } from '@unhead/vue'
import { version as pkgVersion } from './package.json'
import MotionResolver from 'motion-v/resolver'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

process.env.VITE_APP_VERSION = pkgVersion

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Recognize custom elements from web components
          isCustomElement: (tag) =>
            tag === 'youtube-video' ||
            tag.startsWith('media-theme-'),
        },
      },
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@/store': ['useStore'],
        },
        {
          '@/composables/useScrollAnimation': ['useScrollAnimation', 'vScrollAnimate'],
        },
        unheadVueComposablesImports,
      ],
      dts: 'auto-imports.d.ts',
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dts: 'components.d.ts',
      resolvers: [
        MotionResolver()
      ],
    }),
    // Gzip compression pour les assets
    isProd && compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    // Analyse du bundle (visuel)
    isProd && visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    target: 'es2020',
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: 'esbuild',
    cssCodeSplit: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('pinia') || id.includes('@vue')) return 'vue'
            if (id.includes('motion-v') || id.includes('@vueuse/motion')) return 'motion'
            if (id.includes('@unhead')) return 'unhead'
            if (id.includes('ical.js') || id.includes('rrule') || id.includes('v-calendar')) return 'calendar'
            if (id.includes('youtube-video-element')) return 'youtube'
            if (id.includes('player.style')) return 'player-style'
            if (id.includes('@fireworks-js')) return 'fireworks'
            if (id.includes('lodash-es')) return 'lodash'
            return 'vendor'
          }
        }
      }
    }
  },

  esbuild: {
    drop: isProd ? ['console', 'debugger'] : [], // enlève console.log en prod
  },

  server: {
    host: false,
    port: 3000,
    open: true,
  },
})
