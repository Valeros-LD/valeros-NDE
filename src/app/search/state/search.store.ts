import { Injectable, inject, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { NodeModel } from '../../node/types/node.model';
import { Facet } from '../types/facet';
import { SearchResponse } from '../types/search-response';
import { ViewType } from '../views/types/view-type';
import { ViewService } from '../views/view.service';
import { FilterStore } from './filter.store';
import {
  loadSearchParamsFromSessionStorage,
  saveSearchParamsToSessionStorage,
} from './search-params-storage.util';

interface SearchUrlParams {
  q: string;
  filters: string | null;
  page: number;
  view: ViewType;
  sort: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class SearchStore {
  private searchApiService = inject(ApiService);
  private filterStore = inject(FilterStore);
  private route = inject(ActivatedRoute);
  private viewService = inject(ViewService);

  searchTerm = signal('');
  results = signal<NodeModel[]>([]);
  totalResults = signal(0);
  facets = signal<Facet[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  currentPage = signal(1);
  pageSize = signal(20);
  nextPage = signal<string | undefined>(undefined);
  prevPage = signal<string | undefined>(undefined);
  currentView = signal<ViewType>(this.viewService.getDefaultViewType());
  currentSort = signal<string | null>(null);
  private searchParams = signal<Params>(
    loadSearchParamsFromSessionStorage() || {},
  );

  constructor() {
    this.initSearchOnUrlChanges();
  }

  getSearchParams(): Params {
    return this.searchParams();
  }

  private initSearchOnUrlChanges(): void {
    let previousQuery: string | null = null;

    this.route.queryParams
      .pipe(
        map(
          (params): SearchUrlParams => ({
            q: params['q'] || '',
            filters: params['filters'] || null,
            page: params['page'] ? parseInt(params['page'], 10) : 1,
            view:
              (params['view'] as ViewType) ||
              this.viewService.getDefaultViewType(),
            sort: params['sort'] || null,
          }),
        ),
        distinctUntilChanged((prev: SearchUrlParams, curr: SearchUrlParams) => {
          const paramKeys = Object.keys(prev) as (keyof SearchUrlParams)[];
          const noParamsChanged = paramKeys.every(
            (key) => prev[key] === curr[key],
          );
          return noParamsChanged;
        }),
      )
      .subscribe((urlParams: SearchUrlParams) => {
        const { q: query, filters, page, view, sort } = urlParams;

        this.filterStore.clearFiltersIfQueryChanged(query, previousQuery);
        this.filterStore.syncFiltersFromUrl(filters);

        previousQuery = query;
        this.searchTerm.set(query);
        this.currentPage.set(page);
        this.currentView.set(view);
        this.currentSort.set(sort);

        const params: Params = {
          ...(query && { q: query }),
          ...(filters && { filters }),
          ...(page > 1 && { page: page.toString() }),
          ...(view !== this.viewService.getDefaultViewType() && { view }),
          ...(sort && { sort }),
        };
        this.searchParams.set(params);
        saveSearchParamsToSessionStorage(params);

        const viewOptions = this.viewService.getViewOptions(view);
        if (viewOptions.pageSize) {
          this.pageSize.set(viewOptions.pageSize);
        }

        this.performSearch(query, page);
      });
  }

  private performSearch(term: string, page: number = 1): void {
    let trimmedTerm = term.trim();

    if (!trimmedTerm) {
      trimmedTerm = '*';
      // this.results.set([]);
      // return;
    }

    this.loading.set(true);
    this.error.set(null);

    const filters = this.filterStore.buildFilterStrings();

    this.searchApiService
      .search({
        q: trimmedTerm,
        size: this.pageSize(),
        page,
        ...(filters.length > 0 && { filter: filters }),
        ...(this.currentSort() && { sort: this.currentSort()! }),
      })
      .subscribe({
        next: (response: SearchResponse) => {
          this.results.set(response.orderedItems);
          this.totalResults.set(response.partOf.totalItems);
          this.facets.set(response.partOf.facets || []);
          this.nextPage.set(response.next);
          this.prevPage.set(response.prev);
          this.loading.set(false);

          console.log('Search results:', response);
        },
        error: (err) => {
          this.error.set('Failed to search: ' + err.message);
          this.loading.set(false);
          this.results.set([]);
          this.totalResults.set(0);
          this.facets.set([]);
        },
      });
  }
}
