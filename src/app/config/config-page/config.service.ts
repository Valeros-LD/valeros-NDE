import { computed, effect, Injectable, signal } from '@angular/core';
import { ViewsConfig } from '../../search/views/types/view-config';
import { FacetConfig } from '../facets.config';
import { ValerosConfig } from '../types/valeros-config';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly STORAGE_KEY = 'valerosConfig';
  private config = signal<ValerosConfig | null>(null);

  readonly apiBaseUrl = computed(() => this.config()?.api.baseUrl ?? '');
  readonly facets = computed(() => this.config()?.facets ?? []);
  readonly presentation = computed(() => this.config()?.presentation);
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

  initialize(config: ValerosConfig): void {
    // TODO: Validate config structure
    const savedConfig = this.loadConfigFromSessionStorage();
    this.config.set(savedConfig ?? config);
  }

  private loadConfigFromSessionStorage(): ValerosConfig | null {
    return null;

    // const stored = sessionStorage.getItem(this.STORAGE_KEY);
    // if (!stored) return null;

    // try {
    //   return JSON.parse(stored);
    // } catch {
    //   return null;
    // }
  }

  updateConfig(updates: Partial<ValerosConfig>): void {
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

  updatePresentation(
    presentation: Partial<ValerosConfig['presentation']>,
  ): void {
    const current = this.config();
    if (current) {
      this.config.set({
        ...current,
        presentation: { ...current.presentation, ...presentation },
      });
    }
  }

  updateViews(views: ViewsConfig): void {
    const current = this.config();
    if (current) {
      this.config.set({ ...current, views });
    }
  }

  getConfig(): ValerosConfig | null {
    return this.config();
  }
}
