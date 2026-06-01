import { Widget } from '../../../widgets/core/types/node-presentation-config';
import { baseWidgets } from './base-widgets';
import { descriptionWithoutLabelWidget, imageThumbWidget } from './widgets';

export const searchResultWidgets: Widget[] = [
  ...baseWidgets,
  imageThumbWidget,
  descriptionWithoutLabelWidget,
];
