import { Component } from '@angular/core';
import { NodeComponent } from '../../../node/node.component';
import { BaseResultsView } from '../base-results-view';

@Component({
  selector: 'app-list-view',
  imports: [NodeComponent],
  templateUrl: './list-view.component.html',
})
export class ListViewComponent extends BaseResultsView {}
