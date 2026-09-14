import * as z from 'zod';
import { IconKeySchema } from './icon.schema';

export const FacetConfigSchema = z
  .object({
    name: z.string().meta({
      title: 'Name',
      description: 'Facet property name in the data layer.',
      examples: ['creator'],
    }),
    label: z.string().meta({
      title: 'Label',
      description: 'Name shown to visitors for this filter.',
      examples: ['Creator'],
    }),
    icon: IconKeySchema.optional(),
    hidden: z.boolean().optional().meta({
      title: 'Hidden',
      description: 'Hide this filter from visitors.',
    }),
  })
  .meta({
    title: 'Filter',
    description: 'Filter visitors can use to refine the results.',
  });

export type FacetConfig = z.infer<typeof FacetConfigSchema>;
