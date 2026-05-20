import { WidgetsSettings } from '../../shared/widgets/types/widget-config';
import { BASE_WIDGETS_SETTINGS } from './base-widgets.config';

export const MAP_VIEW_WIDGETS_SETTINGS: WidgetsSettings = {
  ...BASE_WIDGETS_SETTINGS,
  widgetOrder: [
    {
      widgetIds: ['image-thumb', 'name', 'description-without-label'],
    },
  ],
  showArrowIndicator: false,
};
