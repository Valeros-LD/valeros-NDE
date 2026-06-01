import { IconKey } from '../../../config/icon.registry';
import { WidgetComponentKey } from '../../../config/presentation/widgets/widget-component.registry';

export interface NodePresentationConfig {
  widgets: PropertyWidget[];
  display: DisplayGroup[];
  fallbackWidget: PropertyWidget;
  showArrowIndicator?: boolean;
}

export interface DisplayGroup {
  label?: string;
  widgetIds: string[];
  collapsible?: boolean;
}

export interface PropertyWidget {
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
  fullWidth?: boolean;
  showOriginalLink?: boolean;
}
