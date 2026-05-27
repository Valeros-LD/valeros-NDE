import { BaseWidgetOptions } from '../../core/types/node-presentation-config';

export interface TextWidgetOptions extends BaseWidgetOptions {
  asHeader?: boolean;
  largeFont?: boolean;
  maxLength?: number;
  enableHighlights?: boolean;
}
