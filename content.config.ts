import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    recursos: defineCollection({
      type: 'page',
      source: 'recursos/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['artigo', 'guia', 'link']),
        date: z.string(),
        icon: z.string().optional(),
        externalUrl: z.string().optional(),
      }),
    }),
  },
})
