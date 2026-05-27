import { Type } from '@angular/core';
import { BaseResultsView } from '../search/views/base-results-view';
import { ListViewComponent } from '../search/views/list-view/list-view.component';
import { MapViewComponent } from '../search/views/map-view/map-view.component';
import { MasonryViewComponent } from '../search/views/masonry-view/masonry-view.component';

export const VIEW_COMPONENT_REGISTRY = {
  'list-view': ListViewComponent,
  'masonry-view': MasonryViewComponent,
  'map-view': MapViewComponent,
} as const;

export type ViewComponentKey = keyof typeof VIEW_COMPONENT_REGISTRY;

export function getViewComponent(key: ViewComponentKey): Type<BaseResultsView> {
  return VIEW_COMPONENT_REGISTRY[key];
}
