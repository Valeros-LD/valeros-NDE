import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import {
  COMMON_SEARCH_RESULT_WIDGETS,
  COMMON_WIDGETS,
  FALLBACK_WIDGET,
} from './widgets/common-widgets.config';

export const GRID_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [...COMMON_WIDGETS, ...COMMON_SEARCH_RESULT_WIDGETS],
  display: [
    {
      widgetIds: ['image-thumb'],
    },
  ],
  fallbackWidget: FALLBACK_WIDGET,
  showArrowIndicator: true,
};
