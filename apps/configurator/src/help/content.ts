import type { FieldHelp } from './types';

export const filtersHelp = {
  description:
    'An example of filters visitors can use to refine their results.',
  media: [
    {
      type: 'image',
      src: 'help/filters.jpg',
      alt: 'A list of filters.',
    },
  ],
} satisfies FieldHelp;

export const arrowIndicatorHelp = {
  description:
    'The arrow indicates that visitors can select an object to view its details.',
  media: [
    {
      type: 'image',
      src: 'help/arrow-indicator.jpg',
      alt: 'A grid of collection objects with arrow indicators highlighted in red.',
    },
  ],
} satisfies FieldHelp;

export const viewSwitchingHelp = {
  title: 'View switching',
  description:
    'Visitors can switch between views to explore data in different ways.',
  media: [
    {
      type: 'video',
      src: 'help/view-switching.mp4',
      title: 'Switching between views',
    },
  ],
} satisfies FieldHelp;
