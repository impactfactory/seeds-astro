// Cheatsheet: https://github.com/colinhacks/zod

export const articlesSchema = {
  z.object({
    desc: z.string().optional(),
    keyvisual: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    published: z.boolean(),
    sortOrder: z.number(),
    title: z.string(),
  }),
};
