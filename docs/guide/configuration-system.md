# Configuration System

Valeros uses a centralized configuration system that controls many aspects of the application. This system is built around the `ConfigService` and is initialized at application startup.

## Architecture

The configuration system consists of three main components:

1. **Configuration Files** - TypeScript files that define settings
2. **ConfigService** - A service that manages and provides access to configuration
3. **Initialization** - App startup logic that loads all configurations

## Configuration Files

Configuration is split into separate files for maintainability. These files are combined into a single centralized Valeros configuration during initialization (see [Initialization](#initialization)).

### Available Configurations

Valeros provides several configuration files to customize different aspects of the application:

- **[Data Layer / API](/guide/api-configuration)** - Configure the data layer endpoint
- **[Facets](/guide/facets-configuration)** - Customize how facets are displayed
- **[Search Views](/guide/search-views)** - Configure how search results are displayed (list, grid, map, ...)
- **[Object Presentation](/guide/configuring-object-presentation)** - Control how heritage objects are displayed through widgets
- **[Styling](/guide/styling)** - Customize the visual appearance of Valeros

## Initialization

Configuration is loaded at application startup through the `initializeAppConfig` function:

**Location:** `src/app/config/config.initializer.ts`

```ts
export function initializeAppConfig() {
  const configService = inject(ConfigService);

  configService.initialize({
    api: API_CONFIG,
    facets: FACETS_CONFIG,
    presentation: {
      default: LIST_PRESENTATION_CONFIG,
      details: DETAILS_PRESENTATION_CONFIG,
      searchResults: {
        list: LIST_PRESENTATION_CONFIG,
        grid: GRID_PRESENTATION_CONFIG,
        map: MAP_PRESENTATION_CONFIG,
      },
    },
    views: SEARCH_VIEWS_CONFIG,
    imagePaths: IMAGE_PATHS_CONFIG,
  });
}
```

This function is registered as an [app initializer](https://angular.dev/api/core/provideAppInitializer) in `src/app/app.config.ts`:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideAppInitializer(initializeAppConfig),
  ],
};
```

## ConfigService

**Location:** `src/app/config/config-page/config.service.ts`

The `ConfigService` manages the application configuration and makes it available throughout the application. All configuration files are loaded at startup and accessed via this service internally by Valeros components.
