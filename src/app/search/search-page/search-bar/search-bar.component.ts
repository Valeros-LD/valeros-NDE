import { CommonModule } from '@angular/common';
import { Component, effect, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';
import { LoadingSpinnerComponent } from '../../../ui/loading-spinner/loading-spinner.component';
import { SearchStore } from '../../state/search.store';
import { AutocompleteDropdownComponent } from './autocomplete-dropdown/autocomplete-dropdown.component';

@Component({
  selector: 'app-search-bar',
  imports: [
    CommonModule,
    FormsModule,
    AutocompleteDropdownComponent,
    NgIcon,
    LoadingSpinnerComponent,
  ],
  templateUrl: './search-bar.component.html',
  viewProviders: [provideIcons({ featherSearch })],
})
export class SearchBarComponent {
  store = inject(SearchStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  autocomplete = viewChild<AutocompleteDropdownComponent>('autocomplete');

  private debounceTimer: ReturnType<typeof setTimeout> | null = null;
  private skipFirstDebouncedSearch = true;
  private enableDebounce = false;

  constructor() {
    effect(() => {
      if (!this.enableDebounce) {
        return;
      }

      const searchTerm = this.store.searchTerm();

      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }

      this.debounceTimer = setTimeout(() => {
        if (this.skipFirstDebouncedSearch) {
          this.skipFirstDebouncedSearch = false;
          return;
        }
        this.performSearch(searchTerm);
      }, 300);
    });
  }

  onSearchTermChange(value: string): void {
    this.store.searchTerm.set(value);
  }

  private performSearch(searchTerm: string): void {
    this.router.navigate(['/search'], {
      queryParams: { q: searchTerm || undefined, filters: undefined, page: 1 },
      queryParamsHandling: 'merge',
    });
  }

  onSearch(): void {
    this.autocomplete()?.hideAndSuppress();
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    const searchTerm = this.store.searchTerm();
    this.performSearch(searchTerm);
  }

  onSuggestionSelect(suggestion: string): void {
    this.store.searchTerm.set(suggestion);
    this.autocomplete()?.hideAndSuppress();
    this.performSearch(suggestion);
  }

  onInputFocus(): void {
    this.autocomplete()?.showCachedResults();
  }

  onInputBlur(): void {
    this.autocomplete()?.hide();
  }
}
