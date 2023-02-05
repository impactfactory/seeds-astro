// Cheatsheet: https://github.com/colinhacks/zod

export const principlesSchema = {
  z.object({
    desc: z.string().optional(),
    keyvisual: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    name: z.array(z.string()),
    published: z.boolean(),
    sortOrder: z.number(),
  }),
};
