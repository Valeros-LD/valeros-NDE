import { WidgetsSettings } from '../widgets/core/types/widget-config';
import { BASE_WIDGETS_SETTINGS } from './base-widgets.config';

export const DETAILS_WIDGETS_SETTINGS: WidgetsSettings = {
  mappings: [
    ...BASE_WIDGETS_SETTINGS.mappings,
    {
      id: 'description-header',
      properties: ['description'],
      component: 'link-widget',
      config: {
        showPropertyLabel: false,
        largeFont: true,
      },
    },
    {
      id: 'is-mock-data',
      properties: ['isMockData'],
      component: 'text-widget',
      config: {
        propertyLabel: 'Testdata',
        icon: 'feather-alert-triangle',
      },
    },
    {
      id: 'license',
      properties: ['license'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Licentie',
        icon: 'feather-file-text',
      },
    },
    {
      id: 'publisher',
      properties: ['publisher'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Uitgever',
        icon: 'feather-users',
      },
    },
    {
      id: 'has-occupation',
      properties: ['hasOccupation'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Beroep',
        icon: 'feather-briefcase',
      },
    },
    {
      id: 'genre',
      properties: ['genre'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Genre',
        icon: 'feather-tag',
      },
    },
    {
      id: 'about',
      properties: ['about'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Over',
        icon: 'feather-info',
      },
    },
    {
      id: 'content-location',
      properties: ['contentLocation', 'location'],
      component: 'map-widget',
      config: {
        propertyLabel: 'Locatie',
        icon: 'feather-map-pin',
        showOriginalLink: true,
      },
    },
    {
      id: 'birth-place',
      properties: ['birthPlace'],
      component: 'map-widget',
      config: {
        propertyLabel: 'Geboorteplaats',
        icon: 'feather-map-pin',
        showOriginalLink: true,
      },
    },
    {
      id: 'death-place',
      properties: ['deathPlace'],
      component: 'map-widget',
      config: {
        propertyLabel: 'Plaats van overlijden',
        icon: 'feather-map-pin',
        showOriginalLink: true,
      },
    },
    {
      id: 'media',
      properties: ['associatedMedia'],
      component: 'media-widget',
      config: {
        showPropertyLabel: false,
        position: 'left',
      },
    },
    {
      id: 'material',
      properties: ['material'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Materiaal',
        icon: 'feather-package',
      },
    },
    {
      id: 'creator',
      properties: ['creator'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Vervaardiger',
        icon: 'feather-user',
      },
    },
    {
      id: 'date-created',
      properties: ['dateCreated'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Vervaardigingsdatum',
        icon: 'feather-calendar',
      },
    },
    {
      id: 'birth-date',
      properties: ['birthDate'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Geboortedatum',
        icon: 'feather-calendar',
      },
    },
    {
      id: 'death-date',
      properties: ['deathDate'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Overlijdensdatum',
        icon: 'feather-calendar',
      },
    },
    {
      id: 'geo',
      properties: ['geo'],
      component: 'map-widget',
      config: {},
    },
    {
      id: 'address',
      properties: ['address'],
      component: 'address-widget',
      config: {
        propertyLabel: 'Adres',
        icon: 'feather-home',
      },
    },
    {
      id: 'is-part-of-license',
      properties: ['isPartOf'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Licentie',
        propertyPath: 'license',
        icon: 'feather-file-text',
      },
    },
    {
      id: 'is-part-of-publisher',
      properties: ['isPartOf'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Uitgever',
        propertyPath: 'publisher',
        icon: 'feather-users',
      },
    },
    {
      id: 'is-based-on',
      properties: ['isBasedOn'],
      component: 'link-widget',
      config: {
        propertyLabel: 'Gebaseerd op',
        icon: 'feather-external-link',
      },
    },
    {
      id: 'referring-nodes',
      properties: ['id'],
      component: 'referring-nodes-widget',
      config: {
        propertyLabel: 'Verwijzende objecten',
        icon: 'feather-link',
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
  hiddenProperties: [],
  hiddenWidgetsById: [
    'image-thumb',
    'description',
    'description-without-label',
  ],
};
