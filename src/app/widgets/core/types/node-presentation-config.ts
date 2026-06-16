import { IconKey } from '../../../config/icon.registry';
import { WidgetComponentKey } from '../../../config/node-presentation/widgets/widget-component.registry';

export interface NodePresentationConfig {
  widgets: Widget[];
  showArrowIndicator?: boolean;
}

export interface Widget {
  id: string;
  properties?: string[];
  componentId: WidgetComponentKey;
  options?: WidgetOptions;
  /**
   * When true, this widget will be used for any properties that have data
   * but don't match any other widget.
   */
  isFallback?: boolean;
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
