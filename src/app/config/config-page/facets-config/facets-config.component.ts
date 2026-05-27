import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, computed, inject } from '@angular/core';
import { FacetsService } from '../../../search/search-page/facets/facets.service';
import { DraggableListItem } from '../../../ui/draggable-list/draggable-list-item';
import { DraggableList } from '../../../ui/draggable-list/draggable-list.component';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-facets-config',
  imports: [DraggableList],
  templateUrl: './facets-config.component.html',
})
export class FacetsConfig {
  protected configService = inject(ConfigService);
  protected facetsService = inject(FacetsService);

  protected readonly facets = this.configService.facets;

  protected readonly items = computed<DraggableListItem[]>(() =>
    this.facets().map((facet) => ({
      label: facet.label,
      sublabel: facet.name,
      icon: this.facetsService.getFacetIcon(facet.name),
      hidden: facet.hidden,
    })),
  );

  protected readonly trackByName = () => (item: DraggableListItem) =>
    this.facets().find((f) => f.label === item.label)?.name ?? '';

  protected onReorder(event: {
    previousIndex: number;
    currentIndex: number;
  }): void {
    const facets = [...this.configService.facets()];
    moveItemInArray(facets, event.previousIndex, event.currentIndex);
    this.configService.updateFacets(facets);
  }

  protected onToggle(index: number): void {
    const facets = [...this.configService.facets()];
    facets[index] = {
      ...facets[index],
      hidden: !facets[index].hidden,
    };
    this.configService.updateFacets(facets);
  }
}
