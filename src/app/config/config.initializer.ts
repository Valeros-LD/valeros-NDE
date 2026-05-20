import { inject } from '@angular/core';
import { ConfigService } from './config.service';
import { BASE_WIDGETS_SETTINGS } from './widgets/base-widgets.config';
import { DETAILS_WIDGETS_SETTINGS } from './widgets/details-widgets.config';
import { LIST_VIEW_WIDGETS_SETTINGS } from './widgets/list-widgets.config';
import { GRID_VIEW_WIDGETS_SETTINGS } from './widgets/grid-widgets.config';
import { MAP_VIEW_WIDGETS_SETTINGS } from './widgets/map-widgets.config';
import { FACETS_CONFIG } from './facets.config';

export function initializeAppConfig() {
  const configService = inject(ConfigService);

  configService.initialize({
    facets: FACETS_CONFIG,
    widgets: {
      default: BASE_WIDGETS_SETTINGS,
      details: DETAILS_WIDGETS_SETTINGS,
      search: {
        list: LIST_VIEW_WIDGETS_SETTINGS,
        grid: GRID_VIEW_WIDGETS_SETTINGS,
        map: MAP_VIEW_WIDGETS_SETTINGS,
      },
    },
    views: {
      defaultView: 'list',
    },
  });
}
