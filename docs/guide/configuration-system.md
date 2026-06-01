# Configuration System

Valeros uses a centralized configuration system that controls many aspects of the application, from API endpoints to data presentation. This system is built around the `ConfigService` and is initialized at application startup.

## Architecture Overview

The configuration system consists of three main components:

1. **Configuration Files** - TypeScript files that define settings
2. **ConfigService** - A service that manages and provides access to configuration
3. **Initialization** - App startup logic that loads all configurations

## Configuration Files

Configuration is split into separate files for maintainability. These files are combined into a single centralized Valeros configuration during initialization (see [Initialization](#initialization)).

### Data Layer API Configuration

**Location:** `src/app/config/api.config.ts`

Defines the data layer endpoint (see [Architecture](/guide/#architecture)):

```ts
export const API_CONFIG: ApiConfig = {
  baseUrl: 'https://datalaag.valeros.nl/v1',
};
```

### Facets Configuration

**Location:** `src/app/config/facets.config.ts`

Configures how facets are displayed in Valeros. The facets themselves are returned by the data layer (see [API spec](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md#get-the-heritage-objects-collection)), this configuration file allows you to customize their presentation:

```ts
export const FACETS_CONFIG: FacetConfig[] = [
  { name: 'dataset', label: 'Dataset', icon: 'feather-archive' },
  { name: 'contentLocation', label: 'Locatie', icon: 'feather-map-pin' },
  {
    name: 'creator',
    label: 'Vervaardiger',
    icon: 'feather-user',
    hidden: true,
  },
  // ...
];
```

Each facet configuration supports:

- `name` - Matches the facet name from the data layer
- `label` - Display label in the UI
- `icon` - Optional icon key from the [Icon Registry](#icon-registry)
- `hidden` - Optional flag to hide the facet from the UI

### Presentation Configuration

**Location:** `src/app/config/widgets/*.config.ts`

Defines how data is displayed in different contexts:

- `list-widgets.config.ts` - List view presentation
- `grid-widgets.config.ts` - Grid view presentation
- `map-widgets.config.ts` - Map view presentation
- `details-widgets.config.ts` - Detail page presentation

See [Widget System](/guide/widget-system) for more details.

### Views Configuration

**Location:** `src/app/config/views/views.config.ts`

Defines available search result views (list, grid, map).

See [View Configurations](/guide/view-configurations) for more details.

### Image Paths Configuration

**Location:** `src/app/config/image-paths.config.ts`

Defines which fields contain image URLs. These paths are used by the `NodeImageResolverService` to locate and extract image URLs from heritage object data.

```ts
export const IMAGE_PATHS_CONFIG: string[] = [
  'image',
  'thumbnailUrl',
  'associatedMedia.thumbnailUrl',
];
```

::: info
Currently, data layer fields are based on the [Schema.org Application Profile for NDE (SCHEMA-AP-NDE)](https://docs.nde.nl/schema-profile/), but this might change in the future.
:::

### Icon Registry

**Location:** `src/app/config/icon.registry.ts`

Maps icon IDs to icon components from the [@ng-icons](https://ng-icons.github.io/ng-icons/) library. This provides type-safe icon references throughout the application via the `IconKey` type.

**Adding new icons:**

1. Import the icon from `@ng-icons/feather-icons`:

```ts
import {
  // ... existing imports
  featherNewIcon,
} from '@ng-icons/feather-icons';
```

2. Register it in the `ICON_REGISTRY`:

```ts
export const ICON_REGISTRY = {
  // ... existing icons
  'feather-new-icon': featherNewIcon,
} as const;
```

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
This feature is still in active development and highly experimental. The UI and functionality may change significantly.
:::
