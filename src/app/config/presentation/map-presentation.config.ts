import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import { searchResultWidgets } from './widgets/search-results-widgets';
import { fallbackWidget } from './widgets/widgets.config';

export const MAP_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [...searchResultWidgets],
  display: [
    {
      widgetIds: ['image-thumb', 'name', 'description-without-label'],
    },
  ],
  fallbackWidget: fallbackWidget,
  showArrowIndicator: false,
};
