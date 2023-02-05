// Cheatsheet: https://github.com/colinhacks/zod

export const environmentsSchema = {
  z.object({
    desc: z.string().optional(),
    keyvisual: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    name: z.string(),
    published: z.boolean(),
    sortOrder: z.number(),
  }),
};
