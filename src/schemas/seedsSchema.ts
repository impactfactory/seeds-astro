// Cheatsheet: https://github.com/colinhacks/zod

export const seedsSchema = {
  z.object({
    author: z.string(),
    costs: z.string(),
    desc_long: z.string().optional(),
    desc_short: z.string().optional(),
    keyvisual: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    gallery: z.array(z.object({src: z.string(),
      alt: z.string(),})),
    inspirational: z.string(),
    links: z.array(z.object({
      src: z.string().url().startsWith('https'),
      text: z.string()})),
    name: z.array(z.string()),
    materials: z.array(z.string()),
    principles: z.array(z.string()),
    published: z.boolean(),
    sortOrder: z.number(),
    synonyms: z.array(z.string()),
    time: z.number(),
    tools: z.array(string()),
    type: z.string(),
    videos: z.array(z.string()),
  }),
};
