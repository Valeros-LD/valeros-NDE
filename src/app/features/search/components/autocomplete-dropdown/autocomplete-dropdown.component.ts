import {
  Component,
  inject,
  input,
  output,
  signal,
  effect,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  skip,
  switchMap,
} from 'rxjs/operators';
import { AutocompleteSuggestionItemComponent } from './autocomplete-suggestion-item/autocomplete-suggestion-item.component';
import { SearchResponse } from '../../types/search-response';
import { ApiService } from '../../../../shared/api/api.service';
import { normalizeToFirst } from '../../../../shared/data-utils/value-normalization.util';

@Component({
  selector: 'app-autocomplete-dropdown',
  imports: [CommonModule, AutocompleteSuggestionItemComponent],
  templateUrl: './autocomplete-dropdown.component.html',
})
export class AutocompleteDropdownComponent {
  searchTerm = input<string>('');
  minChars = input<number>(1);
  debounceMs = input<number>(300);

  selectSuggestion = output<string>();

  suggestions = signal<string[]>([]);
  loading = signal<boolean>(false);
  show = signal<boolean>(false);

  hasSuggestions = computed(() => this.suggestions().length > 0);

  private apiService = inject(ApiService);
  private autocompleteSubject = new Subject<string>();
  private suppressAutocomplete = false;
  private cancelPending = false;

  constructor() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    this.autocompleteSubject
      .pipe(
        skip(1),
        debounceTime(this.debounceMs()),
        distinctUntilChanged(),
        switchMap((term) => {
          if (!this.isTermValid(term)) {
            this.show.set(false);
            return [];
          }
          if (this.cancelPending) {
            return [];
          }
          this.cancelPending = false;
          this.loading.set(true);
          return this.apiService.autocomplete({ q: term, page: 1, size: 5 });
        }),
      )
      .subscribe({
        next: (response: SearchResponse) => {
          if (this.cancelPending) {
            this.loading.set(false);
            return;
          }
          const suggestions: string[] = response.orderedItems
            .map((item) => normalizeToFirst<string>(item.name))
            .filter((name): name is string => !!name);

          this.suggestions.set(suggestions);
          this.show.set(true);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
          this.show.set(false);
        },
      });

    this.watchSearchTermChanges();
  }

  watchSearchTermChanges() {
    effect(() => {
      const term = this.searchTerm();
      if (!this.suppressAutocomplete) {
        this.cancelPending = false;
        this.autocompleteSubject.next(term);
      } else {
        this.suppressAutocomplete = false;
      }
    });
  }

  hide(): void {
    this.show.set(false);
    this.cancelPending = true;
    this.loading.set(false);
  }

  hideAndSuppress(): void {
    this.suppressAutocomplete = true;
    this.cancelPending = true;
    this.loading.set(false);
    this.show.set(false);
  }

  showCachedResults(): void {
    if (this.isTermValid(this.searchTerm()) && this.hasSuggestions()) {
      this.show.set(true);
    }
  }

  private isTermValid(term: string): boolean {
    return !!term && term.length >= this.minChars();
  }
}
