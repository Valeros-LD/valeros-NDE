import { Route } from '@angular/router';
import { DetailsComponent } from './features/details/components/details-page/details.component';
import { SearchPageComponent } from './features/search/components/search-page/search-page.component';
import { ConfigPageComponent } from './features/config/config-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { detailsRouteMatcher } from './details-route.matcher';

export const appRoutes: Route[] = [
  {
    path: '',
    component: SearchPageComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: 'config',
    component: ConfigPageComponent,
  },
  {
    matcher: detailsRouteMatcher,
    component: DetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
