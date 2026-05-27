import { BaseWidgetConfig } from '../../core/types/widget-config';

export interface TextWidgetConfig extends BaseWidgetConfig {
  asHeader?: boolean;
  largeFont?: boolean;
  maxLength?: number;
  enableHighlights?: boolean;
}
