import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import {
  COMMON_WIDGETS,
  FALLBACK_WIDGET,
} from './widgets/common-widgets.config';

export const DETAILS_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [
    ...COMMON_WIDGETS,
    {
      id: 'description-header',
      properties: ['description'],
      componentId: 'link-widget',
      options: {
        showPropertyLabel: false,
        largeFont: true,
      },
    },
    {
      id: 'is-mock-data',
      properties: ['isMockData'],
      componentId: 'text-widget',
      options: {
        propertyLabel: 'Testdata',
        icon: 'feather-alert-triangle',
      },
    },
    {
      id: 'license',
      properties: ['license'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Licentie',
        icon: 'feather-file-text',
      },
    },
    {
      id: 'publisher',
      properties: ['publisher'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Uitgever',
        icon: 'feather-users',
      },
    },
    {
      id: 'has-occupation',
      properties: ['hasOccupation'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Beroep',
        icon: 'feather-briefcase',
      },
    },
    {
      id: 'genre',
      properties: ['genre'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Genre',
        icon: 'feather-tag',
      },
    },
    {
      id: 'about',
      properties: ['about'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Over',
        icon: 'feather-info',
      },
    },
    {
      id: 'content-location',
      properties: ['contentLocation', 'location'],
      componentId: 'map-widget',
      options: {
        propertyLabel: 'Locatie',
        icon: 'feather-map-pin',
        showOriginalLink: true,
      },
    },
    {
      id: 'birth-place',
      properties: ['birthPlace'],
      componentId: 'map-widget',
      options: {
        propertyLabel: 'Geboorteplaats',
        icon: 'feather-map-pin',
        showOriginalLink: true,
      },
    },
    {
      id: 'death-place',
      properties: ['deathPlace'],
      componentId: 'map-widget',
      options: {
        propertyLabel: 'Plaats van overlijden',
        icon: 'feather-map-pin',
        showOriginalLink: true,
      },
    },
    {
      id: 'media',
      properties: ['associatedMedia'],
      componentId: 'media-widget',
      options: {
        showPropertyLabel: false,
        position: 'left',
      },
    },
    {
      id: 'material',
      properties: ['material'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Materiaal',
        icon: 'feather-package',
      },
    },
    {
      id: 'creator',
      properties: ['creator'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Vervaardiger',
        icon: 'feather-user',
      },
    },
    {
      id: 'date-created',
      properties: ['dateCreated'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Vervaardigingsdatum',
        icon: 'feather-calendar',
      },
    },
    {
      id: 'birth-date',
      properties: ['birthDate'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Geboortedatum',
        icon: 'feather-calendar',
      },
    },
    {
      id: 'death-date',
      properties: ['deathDate'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Overlijdensdatum',
        icon: 'feather-calendar',
      },
    },
    {
      id: 'geo',
      properties: ['geo'],
      componentId: 'map-widget',
      options: {},
    },
    {
      id: 'address',
      properties: ['address'],
      componentId: 'address-widget',
      options: {
        propertyLabel: 'Adres',
        icon: 'feather-home',
      },
    },
    {
      id: 'is-part-of-license',
      properties: ['isPartOf'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Licentie',
        propertyPath: 'license',
        icon: 'feather-file-text',
      },
    },
    {
      id: 'is-part-of-publisher',
      properties: ['isPartOf'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Uitgever',
        propertyPath: 'publisher',
        icon: 'feather-users',
      },
    },
    {
      id: 'is-based-on',
      properties: ['isBasedOn'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Gebaseerd op',
        icon: 'feather-external-link',
      },
    },
    {
      id: 'referring-nodes',
      properties: ['id'],
      componentId: 'referring-nodes-widget',
      options: {
        propertyLabel: 'Verwijzende objecten',
        icon: 'feather-link',
      },
    },
  ],
  display: [
    {
      widgetIds: ['name', 'description-header'],
    },
    {
      widgetIds: [
        'media',
        'type',
        'additional-type',
        '*',
        'is-part-of-license',
      ],
    },
    {
      widgetIds: ['dataset', 'is-part-of-publisher', 'is-based-on'],
    },
    {
      widgetIds: ['referring-nodes'],
    },
  ],
  fallbackWidget: FALLBACK_WIDGET,
  showArrowIndicator: true,
};
