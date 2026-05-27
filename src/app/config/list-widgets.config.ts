import { WidgetsSettings } from '../widgets/core/types/widget-config';
import { BASE_WIDGETS_SETTINGS } from './base-widgets.config';

export const LIST_VIEW_WIDGETS_SETTINGS: WidgetsSettings = {
  ...BASE_WIDGETS_SETTINGS,
  mappings: [
    ...BASE_WIDGETS_SETTINGS.mappings,
    {
      id: 'image-thumb-left',
      properties: ['associatedMedia'],
      component: 'image-gallery-widget',
      config: {
        showPropertyLabel: false,
        position: 'left',
        maxThumbnails: 1,
        enableLightbox: false,
        fullWidth: true,
      },
    },
    {
      id: 'dataset-without-label',
      properties: ['isPartOf'],
      component: 'dataset-widget',
      config: {
        showPropertyLabel: false,
      },
    },
  ],
  widgetOrder: [
    {
      widgetIds: ['image-thumb-left', 'name', 'description-without-label'],
    },
  ],
};
