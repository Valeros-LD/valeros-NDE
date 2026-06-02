import { BaseWidgetOptions } from '../../core/types/node-presentation-config';

export interface TextWidgetOptions extends BaseWidgetOptions {
  asH2?: boolean;
  largeFont?: boolean;
  bold?: boolean;
  maxLength?: number;
  enableHighlights?: boolean;
}
