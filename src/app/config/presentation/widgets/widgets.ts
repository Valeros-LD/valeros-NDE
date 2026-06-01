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
    icon: 'grid',
  },
};

export const additionalTypeWidget: PropertyWidget = {
  id: 'additional-type',
  properties: ['additionalType'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Soort (aanvullend)',
    propertyPath: 'name',
    icon: 'grid',
  },
};

export const datasetWidget: PropertyWidget = {
  id: 'dataset',
  properties: ['isPartOf'],
  componentId: 'dataset-widget',
  options: {
    propertyLabel: 'Dataset',
    icon: 'archive',
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

export const descriptionHeaderWidget: PropertyWidget = {
  id: 'description-header',
  properties: ['description'],
  componentId: 'link-widget',
  options: {
    showPropertyLabel: false,
    largeFont: true,
  },
};

export const isMockDataWidget: PropertyWidget = {
  id: 'is-mock-data',
  properties: ['isMockData'],
  componentId: 'text-widget',
  options: {
    propertyLabel: 'Testdata',
    icon: 'alert-triangle',
  },
};

export const licenseWidget: PropertyWidget = {
  id: 'license',
  properties: ['license'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Licentie',
    icon: 'file-text',
  },
};

export const publisherWidget: PropertyWidget = {
  id: 'publisher',
  properties: ['publisher'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Uitgever',
    icon: 'users',
  },
};

export const hasOccupationWidget: PropertyWidget = {
  id: 'has-occupation',
  properties: ['hasOccupation'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Beroep',
    icon: 'briefcase',
  },
};

export const genreWidget: PropertyWidget = {
  id: 'genre',
  properties: ['genre'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Genre',
    icon: 'tag',
  },
};

export const aboutWidget: PropertyWidget = {
  id: 'about',
  properties: ['about'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Over',
    icon: 'info',
  },
};

export const contentLocationWidget: PropertyWidget = {
  id: 'content-location',
  properties: ['contentLocation', 'location'],
  componentId: 'map-widget',
  options: {
    propertyLabel: 'Locatie',
    icon: 'map-pin',
    showOriginalLink: true,
  },
};

export const birthPlaceWidget: PropertyWidget = {
  id: 'birth-place',
  properties: ['birthPlace'],
  componentId: 'map-widget',
  options: {
    propertyLabel: 'Geboorteplaats',
    icon: 'map-pin',
    showOriginalLink: true,
  },
};

export const deathPlaceWidget: PropertyWidget = {
  id: 'death-place',
  properties: ['deathPlace'],
  componentId: 'map-widget',
  options: {
    propertyLabel: 'Plaats van overlijden',
    icon: 'map-pin',
    showOriginalLink: true,
  },
};

export const mediaWidget: PropertyWidget = {
  id: 'media',
  properties: ['associatedMedia'],
  componentId: 'media-widget',
  options: {
    showPropertyLabel: false,
    position: 'left',
  },
};

export const materialWidget: PropertyWidget = {
  id: 'material',
  properties: ['material'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Materiaal',
    icon: 'package',
  },
};

export const creatorWidget: PropertyWidget = {
  id: 'creator',
  properties: ['creator'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Vervaardiger',
    icon: 'user',
  },
};

export const dateCreatedWidget: PropertyWidget = {
  id: 'date-created',
  properties: ['dateCreated'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Vervaardigingsdatum',
    icon: 'calendar',
  },
};

export const birthDateWidget: PropertyWidget = {
  id: 'birth-date',
  properties: ['birthDate'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Geboortedatum',
    icon: 'calendar',
  },
};

export const deathDateWidget: PropertyWidget = {
  id: 'death-date',
  properties: ['deathDate'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Overlijdensdatum',
    icon: 'calendar',
  },
};

export const geoWidget: PropertyWidget = {
  id: 'geo',
  properties: ['geo'],
  componentId: 'map-widget',
  options: {},
};

export const addressWidget: PropertyWidget = {
  id: 'address',
  properties: ['address'],
  componentId: 'address-widget',
  options: {
    propertyLabel: 'Adres',
    icon: 'home',
  },
};

export const isPartOfLicenseWidget: PropertyWidget = {
  id: 'is-part-of-license',
  properties: ['isPartOf'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Licentie',
    propertyPath: 'license',
    icon: 'file-text',
  },
};

export const isPartOfPublisherWidget: PropertyWidget = {
  id: 'is-part-of-publisher',
  properties: ['isPartOf'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Uitgever',
    propertyPath: 'publisher',
    icon: 'users',
  },
};

export const isBasedOnWidget: PropertyWidget = {
  id: 'is-based-on',
  properties: ['isBasedOn'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Gebaseerd op',
    icon: 'external-link',
  },
};

export const referringNodesWidget: PropertyWidget = {
  id: 'referring-nodes',
  properties: ['id'],
  componentId: 'referring-nodes-widget',
  options: {
    propertyLabel: 'Verwijzende objecten',
    icon: 'link',
  },
};

export const imageThumbLeftWidget: PropertyWidget = {
  id: 'image-thumb-left',
  properties: ['associatedMedia'],
  componentId: 'image-gallery-widget',
  options: {
    showPropertyLabel: false,
    position: 'left',
    maxThumbnails: 1,
    enableLightbox: false,
    fullWidth: true,
  },
};

export const datasetWithoutLabelWidget: PropertyWidget = {
  id: 'dataset-without-label',
  properties: ['isPartOf'],
  componentId: 'dataset-widget',
  options: {
    showPropertyLabel: false,
  },
};

export const separatorWidget: PropertyWidget = {
  id: 'separator',
  properties: [],
  componentId: 'separator-widget',
  options: {
    showPropertyLabel: false,
  },
};

export const fallbackWidget: PropertyWidget = {
  id: 'fallback',
  properties: [],
  componentId: 'json-widget',
  options: {},
};
