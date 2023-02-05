// Cheatsheet: https://github.com/colinhacks/zod

export const authorsSchema = {
  z.object({
    desc: z.string().optional(),
    email: z.string().email().optional(),
    firstname: z.string(),
    lastname: z.array(z.string()),
    portrait: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    published: z.boolean(),
    sortOrder: z.number(),
    url: z.string().url().optional(),
  }),
};
