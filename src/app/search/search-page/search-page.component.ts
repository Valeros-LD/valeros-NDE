import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { featherFilter } from '@ng-icons/feather-icons';
import { BreadcrumbService } from '../../details/details-page/breadcrumbs/breadcrumb.service';
import { BreakpointService } from '../../ui/breakpoint/breakpoint.service';
import { ErrorAlertComponent } from '../../ui/error-alert/error-alert.component';
import { HeaderBannerComponent } from '../../ui/header-banner/header-banner.component';
import { PageTitleService } from '../../ui/page-title/page-title.service';
import { FilterStore } from '../state/filter.store';
import { SearchStateService } from '../state/search-state.service';
import { SearchStore } from '../state/search.store';
import { ViewService } from '../views/view.service';
import { DrawerLayoutComponent } from './drawer-layout/drawer-layout.component';
import { DrawerToggleButtonComponent } from './drawer-layout/drawer-toggle-button/drawer-toggle-button.component';
import { FacetsComponent } from './facets/facets.component';
import { Pagination } from './pagination/pagination';
import { ResultsCount } from './results-count/results-count';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchSort } from './search-sort/search-sort';
import { ViewSwitcherComponent } from './view-switcher/view-switcher.component';

@Component({
  selector: 'app-search-page',
  imports: [
    CommonModule,
    SearchBarComponent,
    FacetsComponent,
    DrawerLayoutComponent,
    DrawerToggleButtonComponent,
    SearchSort,
    ResultsCount,
    Pagination,
    ViewSwitcherComponent,
    HeaderBannerComponent,
    ErrorAlertComponent,
  ],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit {
  store = inject(SearchStore);
  filterStore = inject(FilterStore);
  private breadcrumbService = inject(BreadcrumbService);
  private searchStateService = inject(SearchStateService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private breakpointService = inject(BreakpointService);
  private viewService = inject(ViewService);
  private pageTitleService = inject(PageTitleService);

  viewContainer = viewChild('viewContainer', { read: ViewContainerRef });

  currentViewConfig = computed(() => {
    return this.viewService.getViewConfig(this.store.currentView());
  });

  activeFilterCount = computed(() => {
    const count = this.filterStore.activeFilterCount();
    return count > 0 ? count.toString() : undefined;
  });

  protected readonly featherFilter = featherFilter;
  protected readonly isDesktop = this.breakpointService.isDesktop;

  constructor() {
    this.loadViewWhenContainerIsReady();
    this.updatePageTitleOnSearchChange();
    this.scrollToTopOnSearchOrPageChange();
  }

  ngOnInit(): void {
    this.breadcrumbService.reset();

    this.route.queryParams.subscribe((params) => {
      this.searchStateService.setSearchParams(params);
    });
  }

  private loadViewWhenContainerIsReady(): void {
    effect(() => {
      const viewContainer = this.viewContainer();

      if (viewContainer) {
        viewContainer.clear();

        const currentView = this.store.currentView();
        const component = this.viewService.getViewComponent(currentView);
        const config = this.viewService.getViewConfig(currentView);
        const widgetsSettings =
          this.viewService.getViewWidgetsSettings(currentView);

        if (component) {
          const componentRef = viewContainer.createComponent(component);
          componentRef.setInput('results', this.store.results());
          componentRef.setInput('totalResults', this.store.totalResults());
          componentRef.setInput('currentPage', this.store.currentPage());
          componentRef.setInput('pageSize', this.store.pageSize());
          componentRef.setInput('config', config);
          componentRef.setInput('widgetsSettings', widgetsSettings);
        }
      }
    });
  }

  private updatePageTitleOnSearchChange(): void {
    effect(() => {
      const searchTerm = this.store.searchTerm();
      const title = searchTerm
        ? `Zoekresultaten "${searchTerm}"`
        : 'Zoekresultaten';
      this.pageTitleService.setTitle(title);
    });
  }

  private scrollToTopOnSearchOrPageChange(): void {
    effect(() => {
      this.store.currentPage();
      this.store.currentSort();
      this.filterStore.activeFilterCount();
      this.store.results();

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
