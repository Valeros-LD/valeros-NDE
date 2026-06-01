import { PropertyWidget } from '../../../widgets/core/types/node-presentation-config';

export const COMMON_WIDGETS: PropertyWidget[] = [
  {
    id: 'name',
    properties: ['name'],
    componentId: 'link-widget',
    options: {
      showPropertyLabel: false,
      asHeader: true,
    },
  },
  {
    id: 'type',
    properties: ['type'],
    componentId: 'link-widget',
    options: {
      propertyLabel: 'Soort',
      icon: 'feather-grid',
    },
  },
  {
    id: 'additional-type',
    properties: ['additionalType'],
    componentId: 'link-widget',
    options: {
      propertyLabel: 'Soort (aanvullend)',
      propertyPath: 'name',
      icon: 'feather-grid',
    },
  },
  {
    id: 'dataset',
    properties: ['isPartOf'],
    componentId: 'dataset-widget',
    options: {
      propertyLabel: 'Dataset',
      icon: 'feather-archive',
    },
  },
];

export const COMMON_SEARCH_RESULT_WIDGETS: PropertyWidget[] = [
  {
    id: 'image-thumb',
    properties: ['associatedMedia'],
    componentId: 'image-gallery-widget',
    options: {
      showPropertyLabel: false,
      position: 'top',
      maxThumbnails: 1,
      enableLightbox: false,
      fullWidth: true,
    },
  },
  {
    id: 'description-without-label',
    properties: ['description'],
    componentId: 'link-widget',
    options: {
      propertyLabel: 'Beschrijving',
      showPropertyLabel: false,
      maxLength: 200,
    },
  },
];

export const FALLBACK_WIDGET: PropertyWidget = {
  id: 'fallback',
  properties: [],
  componentId: 'json-widget',
  options: {},
};
