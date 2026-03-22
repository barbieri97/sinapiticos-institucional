// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from "node:fs";

const { version } = JSON.parse(readFileSync("./package.json", "utf-8"));

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-studio",
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  // ── Tema: forçar light mode independente da preferência do sistema ──
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },

  runtimeConfig: {
    public: {
      appVersion: version,
      whatsappNumber: '',
      whatsappDisplay: '',
      email: '',
      instagramHandle: '',
      formspreeId: '',
    },
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-01-01",

  // ── Deploy: Vercel (SSR) ─────────────────────────────────────────
  nitro: {
    preset: "vercel",
  },

  vite: {
    optimizeDeps: {
      include: ["reka-ui"],
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  fonts: {
    families: [
      {
        name: "Nunito",
        provider: "google",
        weights: [400, 600, 700, 800, 900],
      },
      {
        name: "DM Sans",
        provider: "google",
        weights: [400, 500],
        styles: ["normal", "italic"],
      },
    ],
  },

  // ── Nuxt Studio — CMS visual auto-hospedado (/_studio) ──────────
  // Auth via GitHub OAuth: cria um OAuth App em github.com/settings/developers
  // Callback URL: https://[seu-dominio]/_studio/api/auth/github
  studio: {
    auth: {
      github: {
        clientId: process.env.STUDIO_GITHUB_CLIENT_ID,
        clientSecret: process.env.STUDIO_GITHUB_CLIENT_SECRET,
      },
    },
  },

  // ── Imagens: provider Vercel ─────────────────────────────────────
  image: {
    provider: "vercel",
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
    format: ["webp", "avif", "jpeg"],
    quality: 80,
  },
});