import * as z from 'zod';
import { ApiConfigSchema } from './api.schema';
import { FacetConfigSchema } from './facet.schema';
import { ViewsConfigSchema } from './view.schema';
import { NodePresentationConfigSchema } from './widget.schema';

export const ValerosConfigSchema = z
  .object({
    $schema: z.string().optional().meta({
      title: 'JSON Schema',
      // description: 'Reference to the JSON Schema for this configuration file.',
      readOnly: true,
    }),
    api: ApiConfigSchema,
    facets: z.array(FacetConfigSchema).meta({
      title: 'Filters',
      description: 'Filters visitors can use to refine the results.',
    }),
    views: ViewsConfigSchema,
    presentation: z
      .object({
        imagePaths: z
          .array(
            z.string().meta({
              title: 'Property path',
              examples: ['associatedMedia.thumbnailUrl'],
            }),
          )
          .meta({
            title: 'Image properties',
            description:
              "Property paths searched in order to find an object's image(s). The first match is used.",
          }),
        details: NodePresentationConfigSchema.meta({
          title: 'Details page',
          description: 'Presentation of an object on the details page.',
        }),
      })
      .meta({
        title: 'Presentation',
        description: 'Settings for presenting objects.',
      }),
  })
  .strict()
  .meta({
    title: 'Valeros configuration',
    description:
      'Settings for how Valeros presents information from the data layer to end users.',
  });

export type ValerosConfig = z.infer<typeof ValerosConfigSchema>;
