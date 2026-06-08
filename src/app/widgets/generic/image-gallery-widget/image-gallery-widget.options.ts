import { WidgetOptions } from '../../core/types/node-presentation-config';

export interface ImageGalleryWidgetOptions extends WidgetOptions {
  maxThumbnails?: number;
  enableLightbox?: boolean;
}
