import * as z from 'zod';

export const ApiConfigSchema = z
  .object({
    type: z.enum(['graphql', 'rest']).default('graphql').meta({
      title: 'API type',
      description:
        'The protocol used by the data layer. Use "graphql" for a GraphQL endpoint and "rest" for a REST endpoint.',
    }),
    baseUrl: z.string().meta({
      title: 'Data layer URL',
      examples: [
        'http://localhost:4000/graphql',
        'https://datalaag.valeros.nl/v1',
      ],
    }),
  })
  .meta({
    title: 'Data layer',
    description: 'Connection to the data layer.',
  });

export type ApiConfig = z.infer<typeof ApiConfigSchema>;
