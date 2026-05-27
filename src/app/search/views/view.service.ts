import { Injectable, Type, inject } from '@angular/core';
import { ConfigService } from '../../config/config-page/config.service';
import { SearchResultsPresentationConfig } from '../../config/types/valeros-config';
import { getViewComponent } from '../../config/view-component.registry';
import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import { BaseResultsView } from './base-results-view';
import { ViewDefinition } from './types/view-config';
import { ViewOptions } from './types/view-options';
import { ViewType } from './types/view-type';

@Injectable({ providedIn: 'root' })
export class ViewService {
  private configService = inject(ConfigService);

  getViewComponent(viewType: ViewType): Type<BaseResultsView> | null {
    const definition = this.getViewDefinition(viewType);
    return definition ? getViewComponent(definition.componentId) : null;
  }

  getViewOptions(viewType: ViewType): ViewOptions {
    return this.getViewDefinition(viewType)?.options || {};
  }

  getViewDefinition(viewType: ViewType): ViewDefinition | null {
    const views = this.configService.views();
    return (
      views?.views.find((v: ViewDefinition) => v.type === viewType) || null
    );
  }

  getAllViewDefinitions(): ViewDefinition[] {
    const views = this.configService.views();
    return views?.views.filter((v: ViewDefinition) => !v.options.hidden) || [];
  }

  getDefaultViewType(): ViewType {
    return this.configService.defaultView();
  }

  getViewPresentationConfig(
    viewType: ViewType,
  ): NodePresentationConfig | undefined {
    const presentation = this.configService.presentation();
    const searchResults =
      presentation?.searchResults as SearchResultsPresentationConfig;
    return searchResults?.[viewType];
  }
}
