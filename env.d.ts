/// <reference types="vite/client" />

declare module '*.postcss' {
  const content: string
  export default content
}

interface ImportMetaEnv {
  /**
   * Automatically read from package.json version field
   */
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_BUILD_EPOCH?: string
  /**
   * Flux d'agenda de la plateforme (par défaut https://api.toulbarz.fr/api/public/agenda/v1)
   */
  readonly VITE_AGENDA_URL?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
