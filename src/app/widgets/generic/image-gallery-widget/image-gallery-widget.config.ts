import { BaseWidgetConfig } from '../../core/types/widget-config';

export interface ImageGalleryWidgetConfig extends BaseWidgetConfig {
  maxThumbnails?: number;
  enableLightbox?: boolean;
}
