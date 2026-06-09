import { Route } from '@angular/router';
import { ConfigPageComponent } from '../config/config-page/config-page.component';
import { DetailsPageComponent } from '../details-page/details-page.component';
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
    component: DetailsPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
