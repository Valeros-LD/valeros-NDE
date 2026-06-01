import { PropertyWidget } from '../../../widgets/core/types/node-presentation-config';

export const nameWidget: PropertyWidget = {
  id: 'name',
  properties: ['name'],
  componentId: 'link-widget',
  options: {
    showPropertyLabel: false,
    asHeader: true,
  },
};

export const typeWidget: PropertyWidget = {
  id: 'type',
  properties: ['type'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Soort',
    icon: 'feather-grid',
  },
};

export const additionalTypeWidget: PropertyWidget = {
  id: 'additional-type',
  properties: ['additionalType'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Soort (aanvullend)',
    propertyPath: 'name',
    icon: 'feather-grid',
  },
};

export const datasetWidget: PropertyWidget = {
  id: 'dataset',
  properties: ['isPartOf'],
  componentId: 'dataset-widget',
  options: {
    propertyLabel: 'Dataset',
    icon: 'feather-archive',
  },
};

export const imageThumbWidget: PropertyWidget = {
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
};

export const descriptionWithoutLabelWidget: PropertyWidget = {
  id: 'description-without-label',
  properties: ['description'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Beschrijving',
    showPropertyLabel: false,
    maxLength: 200,
  },
};

export const fallbackWidget: PropertyWidget = {
  id: 'fallback',
  properties: [],
  componentId: 'json-widget',
  options: {},
};

export const baseWidgets: PropertyWidget[] = [
  nameWidget,
  typeWidget,
  additionalTypeWidget,
  datasetWidget,
];

export const searchResultWidgets: PropertyWidget[] = [
  imageThumbWidget,
  descriptionWithoutLabelWidget,
];
