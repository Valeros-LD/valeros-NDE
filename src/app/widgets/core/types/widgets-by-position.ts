import { PropertyWidget, WidgetPosition } from './node-presentation-config';

export interface WidgetWithProperty {
  property: string;
  widget: PropertyWidget;
}

export type WidgetsByPosition = Record<WidgetPosition, WidgetWithProperty[]>;
