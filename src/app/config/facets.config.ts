import { IconType } from '@ng-icons/core';
import {
  featherArchive,
  featherFileText,
  featherGrid,
  featherUsers,
  featherUser,
  featherMapPin,
  featherPackage,
  featherTag,
} from '@ng-icons/feather-icons';

export interface FacetConfig {
  name: string;
  label: string;
  icon?: IconType;
  hidden?: boolean;
}

export const FACETS_CONFIG: FacetConfig[] = [
  { name: 'dataset', label: 'Dataset', icon: featherArchive },
  { name: 'contentLocation', label: 'Locatie', icon: featherMapPin },
  { name: 'creator', label: 'Vervaardiger', icon: featherUser },
  { name: 'subject', label: 'Onderwerp', icon: featherTag },
  { name: 'genre', label: 'Genre', icon: featherTag },
  { name: 'material', label: 'Materiaal', icon: featherPackage },
  { name: 'additionalType', label: 'Soort (aanvullend)', icon: featherGrid },
  { name: 'publisher', label: 'Uitgever', icon: featherUsers },
  { name: 'license', label: 'Licentie', icon: featherFileText },
];

const facetConfigMap = new Map(
  FACETS_CONFIG.map((config) => [config.name, config]),
);

export function getFacetLabel(facetName: string): string {
  return facetConfigMap.get(facetName)?.label || facetName;
}

export function isFacetHidden(facetName: string): boolean {
  return facetConfigMap.get(facetName)?.hidden ?? false;
}

export function getFacetIcon(facetName: string): IconType | undefined {
  return facetConfigMap.get(facetName)?.icon;
}

export function sortFacets<T extends { name: string }>(facets: T[]): T[] {
  const orderMap = new Map(
    FACETS_CONFIG.map((config, index) => [config.name, index]),
  );

  return [...facets].sort((a, b) => {
    const orderA = orderMap.get(a.name) ?? 999;
    const orderB = orderMap.get(b.name) ?? 999;
    return orderA - orderB;
  });
}
