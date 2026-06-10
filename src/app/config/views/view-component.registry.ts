import { Type } from '@angular/core';
import { BaseResultsView } from '../../search/views/base-results-view';
import { GridViewComponent } from '../../search/views/grid-view/grid-view.component';
import { ListViewComponent } from '../../search/views/list-view/list-view.component';
import { MapViewComponent } from '../../search/views/map-view/map-view.component';

export const VIEW_COMPONENT_REGISTRY = {
  'list-view': ListViewComponent,
  'grid-view': GridViewComponent,
  'map-view': MapViewComponent,
} as const;

export type ViewComponentKey = keyof typeof VIEW_COMPONENT_REGISTRY;

export function getViewComponent(key: ViewComponentKey): Type<BaseResultsView> {
  return VIEW_COMPONENT_REGISTRY[key];
}
