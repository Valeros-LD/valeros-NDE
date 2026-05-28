import { ViewsConfig } from '../../search/views/types/view-config';
import { ViewType } from '../../search/views/types/view-type';
import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import { FacetConfig } from '../facets.config';

export type SearchResultsPresentationConfig = Record<
  ViewType,
  NodePresentationConfig
>;

export interface ValerosConfig {
  api: {
    baseUrl: string;
  };
  facets: FacetConfig[];
  presentation: {
    default: NodePresentationConfig;
    details: NodePresentationConfig;
    searchResults: SearchResultsPresentationConfig;
  };
  views: ViewsConfig;
  imagePaths: string[];
}
