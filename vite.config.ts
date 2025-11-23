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
    vue(),
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
    target: 'es2015', // meilleure compatibilité
    sourcemap: false, // true si debug ou lighthouse veut les .map
    minify: 'esbuild',
    cssCodeSplit: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500, // augmenter si besoin
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Séparer les dépendances lourdes (ex: unhead, vue, pinia, motion-v)
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vue'
            if (id.includes('pinia')) return 'pinia'
            if (id.includes('motion-v')) return 'motion'
            if (id.includes('@unhead')) return 'unhead'
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
