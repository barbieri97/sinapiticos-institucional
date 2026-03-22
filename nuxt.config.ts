// https://nuxt.com/docs/api/configuration/nuxt-config
const appVersion = process.env.npm_package_version ?? '0.0.0'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // ── Tema: forçar light mode independente da preferência do sistema ──
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },

  runtimeConfig: {
    public: {
      appVersion: appVersion,
      whatsappNumber: '',
      whatsappDisplay: '',
      email: '',
      instagramHandle: '',
      formspreeId: ''
    }
  },

  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2025-01-01',

  // ── Deploy: Vercel (SSR) ─────────────────────────────────────────
  nitro: {
    preset: 'vercel'
  },

  vite: {
    optimizeDeps: {
      include: ['reka-ui']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      {
        name: 'Nunito',
        provider: 'google',
        weights: [400, 600, 700, 800, 900]
      },
      {
        name: 'DM Sans',
        provider: 'google',
        weights: [400, 500],
        styles: ['normal', 'italic']
      }
    ]
  },

  // ── Imagens: provider Vercel ─────────────────────────────────────
  image: {
    provider: 'vercel',
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    },
    format: ['webp', 'avif', 'jpeg'],
    quality: 80
  }
})
