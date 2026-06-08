import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import { searchResultWidgets } from './widgets/search-results-widgets';
import {
  datasetWithoutLabelWidget,
  fallbackWidget,
  imageThumbLeftWidget,
} from './widgets/widgets';

export const LIST_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [
    ...searchResultWidgets,
    imageThumbLeftWidget,
    datasetWithoutLabelWidget,
  ],
  displayedWidgetIds: ['image-thumb-left', 'name', 'description-without-label'],
  fallbackWidget: fallbackWidget,
  showArrowIndicator: true,
};
