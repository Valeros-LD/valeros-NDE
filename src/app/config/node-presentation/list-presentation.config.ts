import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import {
  descriptionWithoutLabelWidget,
  imageThumbLeftWidget,
  nameWidget,
} from './widgets/widgets';

export const LIST_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [imageThumbLeftWidget, nameWidget, descriptionWithoutLabelWidget],
  showArrowIndicator: true,
};
