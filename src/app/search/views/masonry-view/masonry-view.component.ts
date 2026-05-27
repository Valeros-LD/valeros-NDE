import { Component } from '@angular/core';
import { NodeComponent } from '../../../node/node.component';
import { BaseResultsView } from '../base-results-view';

@Component({
  selector: 'app-masonry-view',
  imports: [NodeComponent],
  templateUrl: './masonry-view.component.html',
})
export class MasonryViewComponent extends BaseResultsView {}
