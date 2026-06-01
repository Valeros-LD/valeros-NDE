import { PropertyWidget } from '../../../widgets/core/types/node-presentation-config';
import {
  additionalTypeWidget,
  datasetWidget,
  nameWidget,
  typeWidget,
} from './widgets';

export const baseWidgets: PropertyWidget[] = [
  nameWidget,
  typeWidget,
  additionalTypeWidget,
  datasetWidget,
];
