import { Component } from '@angular/core';
import { NodeComponent } from '../../../node/node.component';
import { BaseResultsView } from '../base-results-view';

@Component({
  selector: 'app-grid-view',
  imports: [NodeComponent],
  templateUrl: './grid-view.component.html',
})
export class GridViewComponent extends BaseResultsView {}
