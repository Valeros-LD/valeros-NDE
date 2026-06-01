import { IconType } from '@ng-icons/core';
import {
  featherAlertTriangle,
  featherAlignLeft,
  featherArchive,
  featherBriefcase,
  featherCalendar,
  featherExternalLink,
  featherFileText,
  featherFilter,
  featherGrid,
  featherHome,
  featherImage,
  featherInfo,
  featherLink,
  featherList,
  featherMap,
  featherMapPin,
  featherPackage,
  featherTag,
  featherUser,
  featherUsers,
} from '@ng-icons/feather-icons';

export const ICON_REGISTRY = {
  'alert-triangle': featherAlertTriangle,
  'align-left': featherAlignLeft,
  archive: featherArchive,
  briefcase: featherBriefcase,
  calendar: featherCalendar,
  'external-link': featherExternalLink,
  'file-text': featherFileText,
  filter: featherFilter,
  grid: featherGrid,
  home: featherHome,
  image: featherImage,
  info: featherInfo,
  link: featherLink,
  list: featherList,
  map: featherMap,
  'map-pin': featherMapPin,
  package: featherPackage,
  tag: featherTag,
  user: featherUser,
  users: featherUsers,
} as const;

export type IconKey = keyof typeof ICON_REGISTRY;

export function getIcon(key: IconKey): IconType {
  return ICON_REGISTRY[key];
}

export function getIconOrUndefined(key?: IconKey): IconType | undefined {
  return key ? ICON_REGISTRY[key] : undefined;
}
