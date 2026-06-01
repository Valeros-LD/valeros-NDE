import { inject } from '@angular/core';
import { API_CONFIG } from './api.config';
import { ConfigService } from './config-page/config.service';
import { FACETS_CONFIG } from './facets.config';
import { IMAGE_PATHS_CONFIG } from './image-paths.config';
import { DETAILS_PRESENTATION_CONFIG } from './presentation/details-presentation.config';
import { GRID_PRESENTATION_CONFIG } from './presentation/grid-presentation.config';
import { LIST_PRESENTATION_CONFIG } from './presentation/list-presentation.config';
import { MAP_PRESENTATION_CONFIG } from './presentation/map-presentation.config';
import { SEARCH_VIEWS_CONFIG } from './views/views.config';

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
