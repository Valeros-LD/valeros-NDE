import { PropertyWidget } from '../../../widgets/core/types/node-presentation-config';
import { baseWidgets } from './base-widgets';
import {
  descriptionWithoutLabelWidget,
  imageThumbWidget,
} from './widgets.config';

export const searchResultWidgets: PropertyWidget[] = [
  ...baseWidgets,
  imageThumbWidget,
  descriptionWithoutLabelWidget,
];
