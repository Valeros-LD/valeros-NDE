import { WidgetsSettings } from '../../shared/widgets/types/widget-config';
import { JsonWidget } from '../../shared/widgets/library/generic/json-widget/json-widget.component';
import { LinkWidget } from '../../shared/widgets/library/generic/link-widget/link-widget.component';
import { TextWidget } from '../../shared/widgets/library/generic/text-widget/text-widget.component';
import { MapWidget } from '../../shared/widgets/library/generic/map-widget/map-widget.component';
import { AddressWidget } from '../../shared/widgets/library/domain-specific/address-widget/address-widget.component';
import { MediaWidget } from '../../shared/widgets/library/generic/media-widget/media-widget.component';
import {
  featherAlertTriangle,
  featherBriefcase,
  featherCalendar,
  featherExternalLink,
  featherFileText,
  featherHome,
  featherInfo,
  featherMapPin,
  featherPackage,
  featherTag,
  featherUser,
  featherUsers,
} from '@ng-icons/feather-icons';
import { BASE_WIDGETS_SETTINGS } from './base-widgets.config';

export const DETAILS_WIDGETS_SETTINGS: WidgetsSettings = {
  mappings: [
    ...BASE_WIDGETS_SETTINGS.mappings,
    {
      id: 'description-header',
      properties: ['description'],
      component: LinkWidget,
      config: {
        showPropertyLabel: false,
        largeFont: true,
      },
    },
    {
      id: 'is-mock-data',
      properties: ['isMockData'],
      component: TextWidget,
      config: {
        propertyLabel: 'Testdata',
        icon: featherAlertTriangle,
      },
    },
    {
      id: 'license',
      properties: ['license'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Licentie',
        icon: featherFileText,
      },
    },
    {
      id: 'publisher',
      properties: ['publisher'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Uitgever',
        icon: featherUsers,
      },
    },
    {
      id: 'has-occupation',
      properties: ['hasOccupation'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Beroep',
        icon: featherBriefcase,
      },
    },
    {
      id: 'genre',
      properties: ['genre'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Genre',
        icon: featherTag,
      },
    },
    {
      id: 'about',
      properties: ['about'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Over',
        icon: featherInfo,
      },
    },
    {
      id: 'content-location',
      properties: ['contentLocation', 'location'],
      component: MapWidget,
      config: {
        propertyLabel: 'Locatie',
        icon: featherMapPin,
        showOriginalLink: true,
      },
    },
    {
      id: 'birth-place',
      properties: ['birthPlace'],
      component: MapWidget,
      config: {
        propertyLabel: 'Geboorteplaats',
        icon: featherMapPin,
        showOriginalLink: true,
      },
    },
    {
      id: 'death-place',
      properties: ['deathPlace'],
      component: MapWidget,
      config: {
        propertyLabel: 'Plaats van overlijden',
        icon: featherMapPin,
        showOriginalLink: true,
      },
    },
    {
      id: 'media',
      properties: ['associatedMedia'],
      component: MediaWidget,
      config: {
        showPropertyLabel: false,
        position: 'left',
      },
    },
    {
      id: 'material',
      properties: ['material'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Materiaal',
        icon: featherPackage,
      },
    },
    {
      id: 'creator',
      properties: ['creator'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Vervaardiger',
        icon: featherUser,
      },
    },
    {
      id: 'date-created',
      properties: ['dateCreated'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Vervaardigingsdatum',
        icon: featherCalendar,
      },
    },
    {
      id: 'birth-date',
      properties: ['birthDate'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Geboortedatum',
        icon: featherCalendar,
      },
    },
    {
      id: 'death-date',
      properties: ['deathDate'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Overlijdensdatum',
        icon: featherCalendar,
      },
    },
    {
      id: 'geo',
      properties: ['geo'],
      component: MapWidget,
      config: {},
    },
    {
      id: 'address',
      properties: ['address'],
      component: AddressWidget,
      config: {
        propertyLabel: 'Adres',
        icon: featherHome,
      },
    },
    {
      id: 'is-part-of-license',
      properties: ['isPartOf'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Licentie',
        propertyPath: 'license',
        icon: featherFileText,
      },
    },
    {
      id: 'is-part-of-publisher',
      properties: ['isPartOf'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Uitgever',
        propertyPath: 'publisher',
        icon: featherUsers,
      },
    },
    {
      id: 'is-based-on',
      properties: ['isBasedOn'],
      component: LinkWidget,
      config: {
        propertyLabel: 'Gebaseerd op',
        icon: featherExternalLink,
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
  ],
  hiddenProperties: ['id'],
  hiddenWidgetsById: [
    'image-thumb',
    'description',
    'description-without-label',
  ],
};
