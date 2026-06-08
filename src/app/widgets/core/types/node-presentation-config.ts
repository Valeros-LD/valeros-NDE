import { IconKey } from '../../../config/icon.registry';
import { WidgetComponentKey } from '../../../config/node-presentation/widgets/widget-component.registry';

export interface NodePresentationConfig {
  widgets: Widget[];
  displayedWidgetIds: string[];
  fallbackWidget: Widget;
  showArrowIndicator?: boolean;
}

export interface Widget {
  id: string;
  properties: string[];
  componentId: WidgetComponentKey;
  options?: WidgetOptions;
}

export type WidgetOptions = BaseWidgetOptions & Record<string, unknown>;

export type WidgetPosition = 'top' | 'left' | 'main' | 'right' | 'bottom';

export interface BaseWidgetOptions {
  showPropertyLabel?: boolean;
  propertyLabel?: string;
  propertyPath?: string;
  icon?: IconKey;
  position?: WidgetPosition;
  noPadding?: boolean;
  showOriginalLink?: boolean;
}
