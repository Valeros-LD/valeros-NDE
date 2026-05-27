import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-autocomplete-suggestion-item',
  imports: [CommonModule],
  templateUrl: './autocomplete-suggestion-item.component.html',
})
export class AutocompleteSuggestionItemComponent {
  suggestion = input.required<string>();
  suggestionClick = output<void>();
}
