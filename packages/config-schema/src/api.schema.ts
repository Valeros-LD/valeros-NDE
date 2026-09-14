import * as z from 'zod';

export const ApiConfigSchema = z
  .object({
    baseUrl: z.string().meta({
      title: 'Data layer URL',
      examples: ['http://localhost:4000/graphql'],
    }),
  })
  .meta({
    title: 'Data layer',
    description: 'Connection to the data layer.',
  });

export type ApiConfig = z.infer<typeof ApiConfigSchema>;
