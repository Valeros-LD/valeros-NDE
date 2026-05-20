import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { ConfigService } from '../../../config/config.service';
import { FacetsService } from '../../search/components/facets/facets.service';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-facets-config',
  imports: [CdkDropList, CdkDrag, NgIcon],
  templateUrl: './facets-config.component.html',
  styleUrl: './facets-config.component.scss',
})
export class FacetsConfig {
  protected configService = inject(ConfigService);
  protected facetsService = inject(FacetsService);

  protected readonly facets = this.configService.facets;

  drop(event: CdkDragDrop<string[]>): void {
    const facets = [...this.configService.facets()];
    moveItemInArray(facets, event.previousIndex, event.currentIndex);
    this.configService.updateFacets(facets);
  }

  toggleHidden(index: number): void {
    const facets = [...this.configService.facets()];
    facets[index] = {
      ...facets[index],
      hidden: !facets[index].hidden,
    };
    this.configService.updateFacets(facets);
  }
}
