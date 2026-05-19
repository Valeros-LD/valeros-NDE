import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-results-count',
  imports: [DecimalPipe],
  templateUrl: './results-count.html',
})
export class ResultsCount {
  totalResults = input.required<number>();
  showingResults = input.required<number>();
}
