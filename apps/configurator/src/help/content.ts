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

export const paginationHelp = {
  description:
    'Pagination controls let visitors navigate between pages of search results.',
  media: [
    {
      type: 'image',
      src: 'help/pagination.png',
      alt: 'Pagination controls below a page of search results.',
    },
  ],
} satisfies FieldHelp;

export const resultsCountHelp = {
  description:
    'The results count shows visitors the total number of matching search results.',
  media: [
    {
      type: 'image',
      src: 'help/results-count.png',
      alt: 'The total number of search results displayed above the results.',
    },
  ],
} satisfies FieldHelp;

export const sortingHelp = {
  description:
    'Sorting controls let visitors change the order of their search results.',
  media: [
    {
      type: 'image',
      src: 'help/sorting.png',
      alt: 'Sorting controls displayed above the search results.',
    },
  ],
} satisfies FieldHelp;

export const widgetPositionHelp = {
  title: 'Widget positioning',
  description:
    'Choose where this widget appears in the layout. On mobile, all areas stack into a single column.',
  media: [
    {
      type: 'image',
      src: 'help/widget-positioning.jpg',
      alt: 'Layout diagram showing the top, left, main, right, and bottom widget positions.',
    },
    {
      type: 'image',
      src: 'help/widget-positioning-mobile.jpg',
      alt: 'Mobile layout showing widget positions stacked in a single column.',
    },
  ],
} satisfies FieldHelp;
