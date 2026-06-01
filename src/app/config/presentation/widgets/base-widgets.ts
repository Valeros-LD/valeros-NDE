import { Widget } from '../../../widgets/core/types/node-presentation-config';
import {
  additionalTypeWidget,
  datasetWidget,
  nameWidget,
  typeWidget,
} from './widgets';

export const baseWidgets: Widget[] = [
  nameWidget,
  typeWidget,
  additionalTypeWidget,
  datasetWidget,
];
