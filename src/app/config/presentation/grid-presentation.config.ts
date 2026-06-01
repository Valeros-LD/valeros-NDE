import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import { searchResultWidgets } from './widgets/search-results-widgets';
import { fallbackWidget } from './widgets/widgets';

export const GRID_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [...searchResultWidgets],
  displayedWidgetIds: ['image-thumb'],
  fallbackWidget: fallbackWidget,
  showArrowIndicator: true,
};
