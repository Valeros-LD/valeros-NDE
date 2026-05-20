import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchStore } from '../../state/search.store';
import { FilterStore } from '../../state/filter.store';

import { TooltipBadge } from '../../../../shared/tooltip-badge/tooltip-badge';
import { NgIcon } from '@ng-icons/core';
import {
  getFacetLabel,
  getFacetIcon,
  isFacetHidden,
  sortFacets,
} from '../../../../config/facets.config';

@Component({
  selector: 'app-facets',

  imports: [CommonModule, TooltipBadge, NgIcon],
  templateUrl: './facets.component.html',
  styleUrl: './facets.component.scss',
})
export class FacetsComponent {
  store = inject(SearchStore);
  filterStore = inject(FilterStore);

  protected readonly getFacetLabel = getFacetLabel;
  protected readonly getFacetIcon = getFacetIcon;

  visibleFacets = computed(() => {
    const facets = this.store.facets();
    const filtered = facets.filter((facet) => !isFacetHidden(facet.name));
    return sortFacets(filtered);
  });

  hasFacetWithItems = computed(() =>
    this.visibleFacets().some((facet) => facet.orderedItems.length > 0),
  );

  onFacetToggle(facetName: string, value: string): void {
    this.filterStore.toggleFilter(facetName, value);
  }

  isSelected(facetName: string, value: string): boolean {
    return this.filterStore.isFilterSelected(facetName, value);
  }

  getActiveFilterCount(facetName: string): number {
    const filters = this.filterStore.selectedFilters();
    return filters[facetName]?.size ?? 0;
  }
}
