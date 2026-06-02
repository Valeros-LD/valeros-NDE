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
- **[Data Presentation](/guide/configuring-data-presentation)** - Control how object data is displayed through widgets
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

## Runtime Configuration UI (Experimental)

**Location:** `src/app/config/config-page/`

We're currently experimenting with a UI for changing configuration at runtime. This feature would allow you to adjust all of the configuration settings mentioned on this page through a visual interface, without needing to edit TypeScript files or write code.

The goal is to provide:

- A user-friendly interface for tweaking configuration settings
- Real-time preview of changes
- The ability to export and deploy updated configurations

This would make configuration accessible to users without technical skills, enabling anyone to customize Valeros without needing to understand TypeScript or code.

::: warning Work in Progress
This feature is still in active development. The UI and functionality may change significantly.
:::
