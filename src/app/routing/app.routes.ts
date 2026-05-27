import { Route } from '@angular/router';
import { ConfigPageComponent } from '../config/config-page/config-page.component';
import { DetailsComponent } from '../details/details-page/details.component';
import { SearchPageComponent } from '../search/search-page/search-page.component';
import { NotFoundComponent } from '../ui/not-found/not-found.component';
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
