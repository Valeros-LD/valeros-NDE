import { WidgetsSettings } from '../widgets/core/types/widget-config';

export const BASE_WIDGETS_SETTINGS: WidgetsSettings = {
  mappings: [
    {
      id: 'name',
      properties: ['name'],
      component: 'link-widget',
      config: {
        showPropertyLabel: false,
        asHeader: true,
      },
    },
    {
      id: 'image-thumb',
      properties: ['associatedMedia'],
      component: 'image-gallery-widget',
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
      component: 'link-widget',
      config: {
        propertyLabel: 'Soort',
        icon: 'feather-grid',
      },
    },
    {
      id: 'additional-type',
      properties: ['additionalType'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Soort (aanvullend)',
        propertyPath: 'name',
        icon: 'feather-grid',
      },
    },
    {
      id: 'description',
      properties: ['description'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Beschrijving',
        icon: 'feather-align-left',
      },
    },
    {
      id: 'description-without-label',
      properties: ['description'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Beschrijving',
        showPropertyLabel: false,
        maxLength: 200,
      },
    },
    {
      id: 'dataset',
      properties: ['isPartOf'],
      component: 'dataset-widget',
      config: {
        propertyLabel: 'Dataset',
        icon: 'feather-archive',
      },
    },
  ],
  defaultWidget: {
    component: 'json-widget',
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
