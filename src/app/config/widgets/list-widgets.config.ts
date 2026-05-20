import { WidgetsSettings } from '../../shared/widgets/types/widget-config';
import { ImageGalleryWidget } from '../../shared/widgets/library/generic/image-gallery-widget/image-gallery-widget.component';
import { DatasetWidget } from '../../shared/widgets/library/domain-specific/dataset-widget/dataset-widget.component';
import { BASE_WIDGETS_SETTINGS } from './base-widgets.config';

export const LIST_VIEW_WIDGETS_SETTINGS: WidgetsSettings = {
  ...BASE_WIDGETS_SETTINGS,
  mappings: [
    ...BASE_WIDGETS_SETTINGS.mappings,
    {
      id: 'image-thumb-left',
      properties: ['associatedMedia'],
      component: ImageGalleryWidget,
      config: {
        showPropertyLabel: false,
        position: 'left',
        maxThumbnails: 1,
        enableLightbox: false,
        fullWidth: true,
      },
    },
    {
      id: 'dataset-without-label',
      properties: ['isPartOf'],
      component: DatasetWidget,
      config: {
        showPropertyLabel: false,
      },
    },
  ],
  widgetOrder: [
    {
      widgetIds: ['image-thumb-left', 'name', 'description-without-label'],
    },
  ],
};
