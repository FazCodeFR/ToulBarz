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
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
