import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import {
  descriptionWithoutLabelWidget,
  imageThumbWidget,
  nameWidget,
} from './widgets/widgets';

export const MAP_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [imageThumbWidget, nameWidget, descriptionWithoutLabelWidget],
};
