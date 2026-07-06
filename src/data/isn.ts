export const BILLETTERIE_URL = 'https://my.weezevent.com/isn2026'
export const INSTAGRAM_URL = 'https://www.instagram.com/isn_calisthenics/'
export const VIDEO_URL = 'https://www.youtube.com/embed/IZknfKYn1_o'

export const LIEU = {
  name: 'Palais des Sports André Brouat',
  address: '3 Rue Pierre Laplace, 31000 Toulouse, France',
  mapLink: 'https://maps.google.com/?q=Palais+des+Sports+André+Brouat,+3+Rue+Pierre+Laplace,+31000+Toulouse',
}

export interface IsnStat {
  id: number
  name: string
  value: number
  prefix?: string
  suffix?: string
}

export const stats: IsnStat[] = [
  { id: 1, name: 'Personnes attendues', value: 1700 },
  { id: 2, name: 'Pays représentés', value: 20, prefix: '+' },
  { id: 3, name: 'Athlètes internationaux', value: 20, prefix: '~' },
  { id: 4, name: 'Édition', value: 3, suffix: 'ème' },
]

export interface ProgrammeSlot {
  time: string
  title: string
  place: string
  badges?: string[]
  paragraphs: string[]
}

export interface ProgrammeDay {
  day: string
  date: string
  slots: ProgrammeSlot[]
}

export const programme: ProgrammeDay[] = [
  {
    day: 'Vendredi',
    date: '31 juillet',
    slots: [
      {
        time: '18:00 - 19:30',
        title: 'Face-Off Exclusif',
        place: 'Salle du Sénéchal | Toulouse, FR',
        badges: ['Accès par invitation', 'Retranscription en live'],
        paragraphs: [
          "Le point de départ officiel du week-end.",
          "Un moment clé où tout commence : présentation des athlètes, révélation des battles, premières confrontations et annonces autour de l'événement.",
          "Les plus grands acteurs du street workout y seront réunis, dans un format plus intime, immersif et chargé en tension, devant les 100 premiers détenteurs de pass premium, partenaires et invités.",
          "La soirée se poursuivra ensuite avec un rassemblement sportif et communautaire au bord de la Garonne.",
        ],
      },
    ],
  },
  {
    day: 'Samedi',
    date: '1er août',
    slots: [
      {
        time: '15:30 - 18:30',
        title: 'Arena Experience',
        place: 'Grand Palais des Sports | Toulouse, FR',
        badges: ['15:30 accès Pass Premium', '16:30 accès tous pass'],
        paragraphs: [
          "Accès à l'aire de jeu, aux stands partenaires, rencontres avec les athlètes et démonstrations.",
          "Un espace vivant pour s'immerger dans l'univers ISN 2026 : performances libres, stands, musique, animations, espaces restauration et merchandising officiel disponible en quantité limitée.",
          "De 15h30 à 16h30, l'accès est exclusivement réservé aux détenteurs du Premium Pass, avec des animations exclusives, des battles spéciales et un accès prioritaire au merchandising en édition limitée.",
        ],
      },
      {
        time: '20:30 - 23:45',
        title: 'Le Show ISN',
        place: 'Grand Palais des Sports | Toulouse, FR',
        badges: ['Vote du public via QR code'],
        paragraphs: [
          "Une vingtaine d'athlètes s'affrontent lors de 6 à 8 battles dans un format rythmé et imprévisible.",
          "Le Grand Palais des Sports se transformera en véritable arène : battles, scénographie immersive, interventions live, ambiance épique et performances spectaculaires.",
          "Chaque passage est jugé en direct par le public : grâce à un système de vote accessible via QR code, chaque spectateur pourra voter depuis son téléphone pour décider des gagnants des battles et des champions ISN 2026.",
        ],
      },
    ],
  },
  {
    day: 'Dimanche',
    date: '2 août',
    slots: [
      {
        time: '13:00 - 16:00',
        title: 'Workshop Exclusif',
        place: 'Lieu révélé prochainement',
        badges: ['Billetterie séparée'],
        paragraphs: [
          "Un format inédit pour s'entraîner et progresser aux côtés des athlètes internationaux, en petit comité.",
          "Les informations et places seront communiquées prochainement.",
        ],
      },
      {
        time: '17:00 - 23:00',
        title: 'Rassemblement',
        place: 'Lieu révélé prochainement',
        paragraphs: [
          "Un grand moment de partage autour du street workout.",
          "Rassemblement outdoor : entraînement libre, battles communautaires, stands, food trucks, animations, coucher de soleil et moments de partage avec les athlètes et toute la communauté ISN.",
        ],
      },
    ],
  },
]

export interface TicketTier {
  id: string
  name: string
  price: string
  note?: string
  featured?: boolean
  intro?: string
  features: { title: string, description?: string }[]
}

export const tiers: TicketTier[] = [
  {
    id: 'tier-standard',
    name: 'Standard Pass',
    price: '19,90 €',
    intro: "Vis l'expérience ISN au cœur du public.",
    features: [
      { title: 'Accès au Grand Palais des Sports le samedi' },
      { title: 'Arena Experience & animations avant le show (16h30 – 18h30)' },
      { title: 'Placement libre dans les gradins' },
      { title: 'Show principal (20h30 – 23h45)' },
      { title: 'Rassemblement du dimanche (17h00 – 23h00)' },
      { title: 'Vote en direct pour les athlètes pendant les battles' },
    ],
  },
  {
    id: 'tier-premium',
    name: 'Premium Pass',
    price: '34,90 €',
    featured: true,
    intro: 'Tous les avantages du Pass Standard inclus.',
    features: [
      {
        title: 'Face Off exclusif',
        description: 'Offert aux 100 premiers Premium Pass : présentation des athlètes et immersion avant le show',
      },
      {
        title: 'Entrée fast track dédiée',
        description: "Évitez les longues files d'attente et accédez rapidement à l'événement",
      },
      {
        title: 'Arena Experience exclusive',
        description: "1 heure d'accès anticipé (15h30 – 18h30) avec animations et battles spéciales",
      },
      {
        title: 'Priorité sur le merch limité',
        description: 'Soyez parmi les premiers à accéder aux éditions exclusives ISN 2026',
      },
      {
        title: 'Espace premium réservé',
        description: 'Une zone dédiée avec la meilleure visibilité sur le show',
      },
    ],
  },
]

export interface ExtraTicket {
  name: string
  price: string
  note?: string
  details?: {
    description: string
    meta: { icon: string, text: string }[]
  }
}

export const extraTickets: ExtraTicket[] = [
  { name: 'Standard (0-6 ans)', price: 'Gratuit', note: 'Mêmes accès que le Pass Standard' },
  { name: 'Standard (6-12 ans)', price: '9,50 €', note: 'Mêmes accès que le Pass Standard' },
  {
    name: 'Neo Strength Workshop',
    price: '100,00 €',
    note: 'Places limitées',
    details: {
      description: "L'équipe NEO STRENGTH débarque à Toulouse pour un workshop exclusif avec Iliesse, Daï-Long, Leevan et Onizuka : ateliers pratiques, conseils techniques, corrections, échanges avec les athlètes et goûter convivial. À la fin de la session, direction le rassemblement dès 18h00 au Lac de la Reynerie.",
      meta: [
        { icon: 'i-mdi-calendar', text: 'Dimanche 2 août' },
        { icon: 'i-mdi-clock-outline', text: '12h30 – 16h00' },
        { icon: 'i-mdi-map-marker-outline', text: 'The Roof — Halles de la Cartoucherie, Toulouse' },
        { icon: 'i-mdi-account-group-outline', text: 'Iliesse, Daï-Long, Leevan, Onizuka' },
      ],
    },
  },
]
