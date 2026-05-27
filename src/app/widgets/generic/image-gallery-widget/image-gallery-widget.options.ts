import { BaseWidgetOptions } from '../../core/types/node-presentation-config';

export interface ImageGalleryWidgetOptions extends BaseWidgetOptions {
  maxThumbnails?: number;
  enableLightbox?: boolean;
}
