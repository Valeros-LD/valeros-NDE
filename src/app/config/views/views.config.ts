import { ViewsConfig } from '../../search/views/types/view-config';
import { GRID_PRESENTATION_CONFIG } from '../node-presentation/grid-presentation.config';
import { LIST_PRESENTATION_CONFIG } from '../node-presentation/list-presentation.config';
import { MAP_PRESENTATION_CONFIG } from '../node-presentation/map-presentation.config';

export const SEARCH_VIEWS_CONFIG: ViewsConfig = {
  views: [
    {
      type: 'list',
      componentId: 'list-view',
      options: {
        pageSize: 20,
        showPagination: true,
        showResultsCount: true,
      },
      icon: 'list',
      label: 'Lijst weergave',
      presentationConfig: LIST_PRESENTATION_CONFIG,
    },
    {
      type: 'grid',
      componentId: 'masonry-view',
      options: {
        pageSize: 20,
        showPagination: true,
        showResultsCount: true,
      },
      icon: 'grid',
      label: 'Grid weergave',
      presentationConfig: GRID_PRESENTATION_CONFIG,
    },
    {
      type: 'map',
      componentId: 'map-view',
      options: {
        pageSize: 100,
        showPagination: false,
        showResultsCount: true,
        showSort: false,
      },
      icon: 'map',
      label: 'Kaart weergave',
      presentationConfig: MAP_PRESENTATION_CONFIG,
    },
  ],
  defaultView: 'list',
};
