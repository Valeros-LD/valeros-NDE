import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FilterStore } from '../../state/filter.store';
import { SearchStore } from '../../state/search.store';

import { NgIcon } from '@ng-icons/core';
import { TooltipBadge } from '../../../ui/tooltip-badge/tooltip-badge';
import { FacetsService } from './facets.service';

@Component({
  selector: 'app-facets',

  imports: [CommonModule, TooltipBadge, NgIcon],
  templateUrl: './facets.component.html',
  styleUrl: './facets.component.scss',
})
export class FacetsComponent {
  store = inject(SearchStore);
  filterStore = inject(FilterStore);
  facetsService = inject(FacetsService);

  visibleFacets = computed(() => {
    const facets = this.store.facets();
    const filtered = facets.filter(
      (facet) => !this.facetsService.isFacetHidden(facet.name),
    );
    return this.facetsService.sortFacets(filtered);
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
