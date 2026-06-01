import { IconKey } from './icon.registry';

export interface FacetConfig {
  name: string;
  label: string;
  icon?: IconKey;
  hidden?: boolean;
}

export const FACETS_CONFIG: FacetConfig[] = [
  { name: 'dataset', label: 'Dataset', icon: 'archive' },
  { name: 'contentLocation', label: 'Locatie', icon: 'map-pin' },
  { name: 'creator', label: 'Vervaardiger', icon: 'user' },
  { name: 'subject', label: 'Onderwerp', icon: 'tag' },
  { name: 'genre', label: 'Genre', icon: 'tag' },
  { name: 'material', label: 'Materiaal', icon: 'package' },
  {
    name: 'additionalType',
    label: 'Soort (aanvullend)',
    icon: 'grid',
  },
  { name: 'publisher', label: 'Uitgever', icon: 'users' },
  { name: 'license', label: 'Licentie', icon: 'file-text' },
];
