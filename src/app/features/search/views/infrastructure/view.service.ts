import { Injectable, Type, inject } from '@angular/core';
import { ViewType } from '../types/view-type';
import { ViewMapping, ViewsSettings, ViewConfig } from '../types/view-config';
import { BaseResultsView } from './base-results-view';
import { SEARCH_VIEWS_CONFIG } from '../../../../config/views.config';
import { ConfigService } from '../../../../config/config.service';

@Injectable({ providedIn: 'root' })
export class ViewService {
  private settings: ViewsSettings = SEARCH_VIEWS_CONFIG;
  private configService = inject(ConfigService);

  getViewComponent(viewType: ViewType): Type<BaseResultsView> | null {
    return this.getViewMapping(viewType)?.component || null;
  }

  getViewConfig(viewType: ViewType): ViewConfig {
    return this.getViewMapping(viewType)?.config || {};
  }

  getViewMapping(viewType: ViewType): ViewMapping | null {
    return this.settings.mappings.find((m) => m.type === viewType) || null;
  }

  getAllViewMappings(): ViewMapping[] {
    return this.settings.mappings;
  }

  getDefaultViewType(): ViewType {
    return this.configService.defaultView();
  }

  getViewWidgetsSettings(viewType: ViewType) {
    return this.getViewMapping(viewType)?.widgetsSettings;
  }
}
