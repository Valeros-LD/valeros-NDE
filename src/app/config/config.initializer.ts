import { inject } from '@angular/core';
import { API_CONFIG } from './api.config';
import { ConfigService } from './config-page/config.service';
import { FACETS_CONFIG } from './facets.config';
import { IMAGE_PATHS_CONFIG } from './image-paths.config';
import { SEARCH_VIEWS_CONFIG } from './views/views.config';
import { DETAILS_PRESENTATION_CONFIG } from './widgets/details-widgets.config';
import { GRID_PRESENTATION_CONFIG } from './widgets/grid-widgets.config';
import { LIST_PRESENTATION_CONFIG } from './widgets/list-widgets.config';
import { MAP_PRESENTATION_CONFIG } from './widgets/map-widgets.config';

export function initializeAppConfig() {
  const configService = inject(ConfigService);

  configService.initialize({
    api: API_CONFIG,
    facets: FACETS_CONFIG,
    presentation: {
      default: LIST_PRESENTATION_CONFIG,
      details: DETAILS_PRESENTATION_CONFIG,
      searchResults: {
        list: LIST_PRESENTATION_CONFIG,
        grid: GRID_PRESENTATION_CONFIG,
        map: MAP_PRESENTATION_CONFIG,
      },
    },
    views: SEARCH_VIEWS_CONFIG,
    imagePaths: IMAGE_PATHS_CONFIG,
  });
}
