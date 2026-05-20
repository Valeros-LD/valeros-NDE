import { Injectable, signal, computed } from '@angular/core';
import { WidgetsSettings } from '../shared/widgets/types/widget-config';
import { ViewType } from '../features/search/views/types/view-type';
import { FacetConfig } from './facets.config';

export interface AppConfig {
  facets: FacetConfig[];
  widgets: {
    default: WidgetsSettings;
    details: WidgetsSettings;
    search: {
      list: WidgetsSettings;
      grid: WidgetsSettings;
      map: WidgetsSettings;
    };
  };
  views: {
    defaultView: ViewType;
  };
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config = signal<AppConfig | null>(null);

  readonly facets = computed(() => this.config()?.facets ?? []);
  readonly widgets = computed(() => this.config()?.widgets);
  readonly defaultView = computed(
    () => this.config()?.views.defaultView ?? 'list',
  );

  initialize(config: AppConfig): void {
    this.config.set(config);
  }

  updateConfig(updates: Partial<AppConfig>): void {
    const current = this.config();
    if (current) {
      this.config.set({ ...current, ...updates });
    }
  }

  updateFacets(facets: FacetConfig[]): void {
    const current = this.config();
    if (current) {
      this.config.set({ ...current, facets });
    }
  }

  updateWidgets(widgets: Partial<AppConfig['widgets']>): void {
    const current = this.config();
    if (current) {
      this.config.set({
        ...current,
        widgets: { ...current.widgets, ...widgets },
      });
    }
  }

  getConfig(): AppConfig | null {
    return this.config();
  }
}
