export const BILLETTERIE_URL = 'https://my.weezevent.com/isn2026'
export const INSTAGRAM_URL = 'https://www.instagram.com/isn_calisthenics/'
export const VIDEO_URL = 'https://pub-6adac5dd42e04ef5bc9df5e5e87fcee8.r2.dev/video_isn_2026.mp4'

export const LIEU = {
  name: 'Palais des Sports André Brouat',
  address: '3 Rue Pierre Laplace, 31000 Toulouse, France',
  mapLink: 'https://maps.google.com/?q=Palais+des+Sports+André+Brouat,+3+Rue+Pierre+Laplace,+31000+Toulouse',
}

export interface IsnStat {
  id: number
  name: string
  value: number
  icon: string
  highlight?: boolean
}

export const stats: IsnStat[] = [
  { id: 1, name: 'Spectateurs', value: 1190, icon: 'i-mdi-account-group', highlight: true },
  { id: 2, name: 'Participants', value: 700, icon: 'i-mdi-arm-flex', highlight: true },
  { id: 3, name: 'Pays représentés', value: 20, icon: 'i-mdi-earth' },
  { id: 4, name: 'Athlètes internationaux', value: 19, icon: 'i-mdi-trophy-outline' },
  { id: 5, name: 'Bénévoles mobilisés', value: 50, icon: 'i-mdi-hand-heart' },
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
          "Un moment clé où tout a commencé : présentation des athlètes, révélation des battles, premières confrontations et annonces autour de l'événement.",
          "Les plus grands acteurs du street workout y étaient réunis, dans un format plus intime, immersif et chargé en tension, devant les 100 premiers détenteurs de pass premium, partenaires et invités.",
          "La soirée s'est poursuivie avec un rassemblement sportif et communautaire au bord de la Garonne.",
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
          "Un espace vivant pour s'immerger dans l'univers ISN 2026 : performances libres, stands, musique, animations, espaces restauration et merchandising officiel en quantité limitée.",
          "De 15h30 à 16h30, l'accès était exclusivement réservé aux détenteurs du Premium Pass, avec des animations exclusives, des battles spéciales et un accès prioritaire au merchandising en édition limitée.",
        ],
      },
      {
        time: '20:30 - 23:45',
        title: 'Le Show ISN',
        place: 'Grand Palais des Sports | Toulouse, FR',
        badges: ['Vote du public via QR code'],
        paragraphs: [
          "19 athlètes internationaux se sont affrontés lors de battles au format rythmé et imprévisible.",
          "Le Grand Palais des Sports s'est transformé en véritable arène : battles, scénographie immersive, interventions live, ambiance épique et performances spectaculaires.",
          "Chaque passage a été jugé en direct par le public : grâce à un système de vote accessible via QR code, chaque spectateur a pu voter depuis son téléphone pour désigner les gagnants des battles et les champions ISN 2026.",
        ],
      },
    ],
  },
  {
    day: 'Dimanche',
    date: '2 août',
    slots: [
      {
        time: '12:30 - 16:00',
        title: 'Workshop Exclusif',
        place: 'The Roof — Halles de la Cartoucherie | Toulouse, FR',
        badges: ['Billetterie séparée'],
        paragraphs: [
          "Un format inédit pour s'entraîner et progresser aux côtés des athlètes internationaux, en petit comité.",
          "L'équipe Neo Strength (Iliesse, Daï-Long, Leevan et Onizuka) a animé ateliers pratiques, conseils techniques et corrections, avant un goûter convivial.",
        ],
      },
      {
        time: '18:00 - 23:00',
        title: 'Rassemblement',
        place: 'Lac de la Reynerie | Toulouse, FR',
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

export interface GalleryPhoto {
  id: number
  alt: string
  // large = 2×2, wide = 2×1, tall = 1×2 (photo portrait)
  span?: 'large' | 'wide' | 'tall'
}

// Ordre éditorial : 4 large + 2 wide + 1 tall + 10 standard = 32 cellules (8 rangées complètes sur 4 colonnes)
export const gallery: GalleryPhoto[] = [
  { id: 6, alt: 'Le Grand Palais des Sports plongé dans les lumières violettes pendant le show ISN 2026', span: 'large' },
  { id: 3, alt: 'Présentation des athlètes sur scène lors du Face-Off à la Salle du Sénéchal' },
  { id: 8, alt: "Face-à-face entre deux athlètes au centre de l'arène avant les battles" },
  { id: 12, alt: 'Trois athlètes en planche sur les barres devant un public illuminé par les lampes des téléphones', span: 'large' },
  { id: 5, alt: 'Figure acrobatique en noir et blanc : un athlète porte une athlète en équilibre', span: 'tall' },
  { id: 11, alt: 'Athlète en L-sit aux anneaux pendant une battle' },
  { id: 13, alt: 'Athlète en équilibre sur les barres parallèles sous les yeux des autres compétiteurs', span: 'large' },
  { id: 17, alt: 'Athlète en planche sur une barre basse pendant le show' },
  { id: 9, alt: 'Figure aérienne à la barre fixe, en noir et blanc' },
  { id: 16, alt: 'Le public debout applaudit dans les gradins du Grand Palais des Sports', span: 'wide' },
  { id: 14, alt: 'Battle à la barre fixe observée par deux athlètes, en noir et blanc' },
  { id: 15, alt: "Les athlètes saluent le public sur la scène de l'arène" },
  { id: 10, alt: "Vue d'ensemble de la foule rassemblée sur l'aire de jeu pendant l'Arena Experience", span: 'wide' },
  { id: 4, alt: 'Battle communautaire au cœur du cercle lors du rassemblement de nuit', span: 'large' },
  { id: 7, alt: "Photo de groupe des athlètes et de l'équipe ISN 2026 devant l'écran de l'édition 2026" },
  { id: 1, alt: 'Ateliers et corrections techniques pendant le workshop Neo Strength' },
  { id: 2, alt: 'Stands, drapeau ISN et participants au rassemblement en plein air' },
]

const photoFile = (id: number) => `isn-2026-${String(id).padStart(2, '0')}.webp`
export const galleryThumb = (id: number) => `/img/isn/thumb/${photoFile(id)}`
export const galleryFull = (id: number) => `/img/isn/full/${photoFile(id)}`
