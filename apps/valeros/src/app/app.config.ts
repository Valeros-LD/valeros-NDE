import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withXhr } from '@angular/common/http';
import localeNl from '@angular/common/locales/nl';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, UrlSerializer } from '@angular/router';
import { ApiService } from './api/api.service';
import { GraphqlApiService } from './api/graphql-api.service';
import { RestApiService } from './api/rest-api.service';
import { initializeAppConfig } from './config/config.initializer';
import { ConfigService } from './config/config.service';
import { appRoutes } from './routing/app.routes';
import { ValerosUrlSerializer } from './routing/valeros-url-serializer';

registerLocaleData(localeNl);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(withXhr()),
    { provide: LOCALE_ID, useValue: 'nl-NL' },
    { provide: UrlSerializer, useClass: ValerosUrlSerializer },
    GraphqlApiService,
    RestApiService,
    {
      provide: ApiService,
      useFactory: (
        config: ConfigService,
        graphql: GraphqlApiService,
        rest: RestApiService,
      ) => (config.apiType() === 'rest' ? rest : graphql),
      deps: [ConfigService, GraphqlApiService, RestApiService],
    },
    provideAppInitializer(initializeAppConfig),
  ],
};
