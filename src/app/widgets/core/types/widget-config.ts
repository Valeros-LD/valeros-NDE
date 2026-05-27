import { IconKey } from '../../../config/icon.registry';
import { WidgetComponentKey } from '../../../config/widget-component.registry';

export interface WidgetsSettings {
  mappings: WidgetMapping[];
  defaultWidget: WidgetMapping;
  widgetOrder?: WidgetOrderGroup[];
  hiddenProperties?: string[];
  hiddenWidgetsById?: string[];
  showArrowIndicator?: boolean;
}

export interface WidgetOrderGroup {
  label?: string;
  widgetIds: string[];
}

export interface WidgetMapping {
  id?: string;
  component: WidgetComponentKey;
  properties: string[];
  config?: WidgetConfig;
}

export type WidgetConfig = BaseWidgetConfig & Record<string, unknown>;

export type WidgetPosition = 'top' | 'left' | 'main' | 'right' | 'bottom';

export interface BaseWidgetConfig {
  showPropertyLabel?: boolean;
  propertyLabel?: string;
  propertyPath?: string;
  icon?: IconKey;
  position?: WidgetPosition;
  fullWidth?: boolean;
  showOriginalLink?: boolean;
}
