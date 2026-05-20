import { WidgetsSettings } from '../../shared/widgets/types/widget-config';
import { JsonWidget } from '../../shared/widgets/library/generic/json-widget/json-widget.component';
import { ImageGalleryWidget } from '../../shared/widgets/library/generic/image-gallery-widget/image-gallery-widget.component';
import { DatasetWidget } from '../../shared/widgets/library/domain-specific/dataset-widget/dataset-widget.component';
import { LinkWidget } from '../../shared/widgets/library/generic/link-widget/link-widget.component';
import {
  featherAlignLeft,
  featherArchive,
  featherGrid,
} from '@ng-icons/feather-icons';

export const BASE_WIDGETS_SETTINGS: WidgetsSettings = {
  mappings: [
    {
      id: 'name',
      properties: ['name'],
      component: LinkWidget,
      config: {
        showPropertyLabel: false,
        asHeader: true,
      },
    },
    {
      id: 'image-thumb',
      properties: ['associatedMedia'],
      component: ImageGalleryWidget,
      config: {
        showPropertyLabel: false,
        position: 'top',
        maxThumbnails: 1,
        enableLightbox: false,
        fullWidth: true,
      },
    },
    {
      id: 'type',
      properties: ['type'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Soort',
        icon: featherGrid,
      },
    },
    {
      id: 'additional-type',
      properties: ['additionalType'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Soort (aanvullend)',
        propertyPath: 'name',
        icon: featherGrid,
      },
    },
    {
      id: 'description',
      properties: ['description'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Beschrijving',
        icon: featherAlignLeft,
      },
    },
    {
      id: 'description-without-label',
      properties: ['description'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Beschrijving',
        showPropertyLabel: false,
        maxLength: 200,
      },
    },
    {
      id: 'dataset',
      properties: ['isPartOf'],
      component: DatasetWidget,
      config: {
        propertyLabel: 'Dataset',
        icon: featherArchive,
      },
    },
  ],
  defaultWidget: {
    component: JsonWidget,
    properties: [],
    config: {},
  },
  widgetOrder: [
    {
      widgetIds: ['name', 'description-without-label'],
    },
  ],
  showArrowIndicator: true,
};
