import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import {
  baseWidgets,
  fallbackWidget,
  searchResultWidgets,
} from './widgets/widgets.config';

export const LIST_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [
    ...baseWidgets,
    ...searchResultWidgets,
    {
      id: 'image-thumb-left',
      properties: ['associatedMedia'],
      componentId: 'image-gallery-widget',
      options: {
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
      componentId: 'dataset-widget',
      options: {
        showPropertyLabel: false,
      },
    },
  ],
  display: [
    {
      widgetIds: ['image-thumb-left', 'name', 'description-without-label'],
    },
  ],
  fallbackWidget: fallbackWidget,
  showArrowIndicator: true,
};
