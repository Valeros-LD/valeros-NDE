import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import {
  baseWidgets,
  fallbackWidget,
  searchResultWidgets,
} from './widgets/widgets.config';

export const MAP_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [...baseWidgets, ...searchResultWidgets],
  display: [
    {
      widgetIds: ['image-thumb', 'name', 'description-without-label'],
    },
  ],
  fallbackWidget: fallbackWidget,
  showArrowIndicator: false,
};
