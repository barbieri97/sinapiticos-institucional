// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from 'node:fs'

const { version } = JSON.parse(readFileSync('./package.json', 'utf-8'))

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
  ],

  // ── Tema: forçar light mode independente da preferência do sistema ──
  colorMode: {
    preference: 'light',
  },

  // ── Deploy: Vercel (SSR) ─────────────────────────────────────────
  nitro: {
    preset: 'vercel',
  },

  // ── Imagens: provider Vercel ─────────────────────────────────────
  image: {
    provider: 'vercel',
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
    format: ['webp', 'avif', 'jpeg'],
    quality: 80,
  },

  fonts: {
    families: [
      { name: 'Nunito', provider: 'google', weights: [400, 600, 700, 800, 900] },
      { name: 'DM Sans', provider: 'google', weights: [400, 500], styles: ['normal', 'italic'] },
    ],
  },

  runtimeConfig: {
    public: {
      appVersion: version,
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    optimizeDeps: {
      include: ['reka-ui'],
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },
})
