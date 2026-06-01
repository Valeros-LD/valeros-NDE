import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import {
  baseWidgets,
  fallbackWidget,
  searchResultWidgets,
} from './widgets/widgets.config';

export const GRID_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [...baseWidgets, ...searchResultWidgets],
  display: [
    {
      widgetIds: ['image-thumb'],
    },
  ],
  fallbackWidget: fallbackWidget,
  showArrowIndicator: true,
};
