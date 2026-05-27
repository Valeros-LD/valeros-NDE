import { computed, effect, Injectable, signal } from '@angular/core';
import { ViewsSettings } from '../../search/views/types/view-config';
import { WidgetsSettings } from '../../widgets/core/types/widget-config';
import { FacetConfig } from '../facets.config';

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
  views: ViewsSettings;
  imagePaths: string[];
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly STORAGE_KEY = 'valerosConfig';
  private config = signal<AppConfig | null>(null);

  readonly facets = computed(() => this.config()?.facets ?? []);
  readonly widgets = computed(() => this.config()?.widgets);
  readonly views = computed(() => this.config()?.views);
  readonly defaultView = computed(
    () => this.config()?.views?.defaultView ?? 'list',
  );

  constructor() {
    this.initSaveConfigToSessionStorageOnChange();
  }

  initSaveConfigToSessionStorageOnChange() {
    effect(() => {
      const config = this.config();
      if (config) {
        sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(config));
      }
    });
  }

  initialize(config: AppConfig): void {
    // TODO: Validate config structure
    const savedConfig = this.loadConfigFromSessionStorage();
    this.config.set(savedConfig ?? config);
  }

  private loadConfigFromSessionStorage(): AppConfig | null {
    return null;

    // const stored = sessionStorage.getItem(this.STORAGE_KEY);
    // if (!stored) return null;

    // try {
    //   return JSON.parse(stored);
    // } catch {
    //   return null;
    // }
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

  updateViews(views: ViewsSettings): void {
    const current = this.config();
    if (current) {
      this.config.set({ ...current, views });
    }
  }

  getConfig(): AppConfig | null {
    return this.config();
  }
}
