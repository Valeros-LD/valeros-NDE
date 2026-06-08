import { WidgetOptions } from '../../core/types/node-presentation-config';

export interface TextWidgetOptions extends WidgetOptions {
  asH2?: boolean;
  largeFont?: boolean;
  bold?: boolean;
  maxLength?: number;
  enableHighlights?: boolean;
}
