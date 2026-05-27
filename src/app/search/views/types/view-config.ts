import { IconKey } from '../../../config/icon.registry';
import { ViewComponentKey } from '../../../config/view-component.registry';
import { WidgetsSettings } from '../../../widgets/core/types/widget-config';
import { ViewType } from './view-type';

export interface BaseViewConfig {
  pageSize?: number;
  showPagination?: boolean;
  showResultsCount?: boolean;
  showSort?: boolean;
  hidden?: boolean;
}

export type ViewConfig = BaseViewConfig & Record<string, unknown>;

export interface ViewMapping {
  type: ViewType;
  component: ViewComponentKey;
  config: ViewConfig;
  icon: IconKey;
  label: string;
  widgetsSettings: WidgetsSettings;
}

export interface ViewsSettings {
  mappings: ViewMapping[];
  defaultView: ViewType;
}
