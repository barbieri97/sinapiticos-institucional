import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        date: z.string(),
        icon: z.string().optional(),
        externalUrl: z.string().optional(),
      }),
    }),
  },
});
