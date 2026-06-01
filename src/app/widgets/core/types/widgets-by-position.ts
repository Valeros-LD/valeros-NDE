import { Widget, WidgetPosition } from './node-presentation-config';

export interface WidgetWithProperty {
  property: string;
  widget: Widget;
}

export type WidgetsByPosition = Record<WidgetPosition, WidgetWithProperty[]>;
