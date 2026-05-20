import { Component, inject } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NgIcon } from '@ng-icons/core';
import { ConfigService } from '../../config/config.service';
import { FacetsService } from '../search/components/facets/facets.service';
import { FacetsComponent } from '../search/components/facets/facets.component';
import { FacetsConfig } from './facets-config/facets-config.component';

@Component({
  selector: 'app-config-page',
  imports: [FacetsConfig],
  templateUrl: './config-page.component.html',
  styleUrl: './config-page.component.scss',
})
export class ConfigPageComponent {}
