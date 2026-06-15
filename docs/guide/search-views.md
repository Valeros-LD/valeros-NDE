# Configuring Search Views (List/Grid/Map)

Views define how search results are displayed to users. Valeros supports multiple [view types](/guide/search-views.html#built-in-view-types) for different use cases. You can extend this by [creating your own views](/guide/custom-views).

<video controls>
  <source src="./view-switching.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<span class="video-caption">Video: Switching between list, grid, and map views</span>

## View Configuration File

View configurations are controlled through the configuration file in `src/app/config/views/views.config.ts`.

## Basic Structure

The default views configuration file has the following structure:

```ts
export const SEARCH_VIEWS_CONFIG: ViewsConfig = {
  views: [
    {
      type: 'list',
      componentId: 'list-view',
      options: {
        pageSize: 20,
        showPagination: true,
        showResultsCount: true,
      },
      icon: 'list',
      label: 'Lijst weergave',
      presentationConfig: LIST_PRESENTATION_CONFIG,
    },
    // ... more views
  ],
  defaultView: 'list',
};
```

### Configuration Properties

- **`views`** - Array of view configurations. Each view has:
  - **`type`** - Unique identifier of the view's `ViewType` (e.g., `'grid'`, `'list'`, or `'map'`)
  - **`componentId`** - Component to render (`'list-view'`, `'grid-view'`, `'map-view'`, as defined in `src/app/config/views/view-component.registry.ts`)
  - **`options`** - View-specific options (see [View Options](#view-options))
  - **`icon`** - Icon name for the view switcher (see [Icon Registry](/guide/icon-registry))
  - **`label`** - Display label for the view switcher
  - **`presentationConfig`** - [Object presentation configuration](/guide/configuring-object-presentation) for this view

- **`defaultView`** - The view type to show by default

## Built-in View Types

A **view** defines how search results are displayed to users. Each view has a specific layout and behavior suited for different use cases.

Valeros supports the following built-in view types:

- **`'list'`** - List view with thumbnails and metadata (component: `'list-view'`)
- **`'grid'`** - Grid/masonry view for image-heavy collections (component: `'grid-view'`)
- **`'map'`** - Map view for geographic exploration (component: `'map-view'`)

## View Options

All views support the following **base options** (see `BaseViewOptions` in `src/app/search/views/types/view-options.ts`):

- **`pageSize`** - Number of results to show per page (default: `20`)
- **`showPagination`** - Whether to show pagination controls (default: `true`)
- **`showResultsCount`** - Whether to show the total results count (default: `true`)
- **`showSort`** - Whether to show sort controls (default: `true`)
- **`hidden`** - Whether to hide the view from the view switcher (default: `false`)

## Common Tasks

### Changing the Default View

The default view is controlled by the `defaultView` property. Set it to the `type` of the view you want to show by default:

```ts
export const SEARCH_VIEWS_CONFIG: ViewsConfig = {
  views: [
    // ...
  ],
  defaultView: 'grid', // Show grid view by default
};
```

### Customizing View Options

You can customize view behavior by modifying the `options` object (see [View Options](#view-options)):

```ts
{
  type: 'map',
  componentId: 'map-view',
  options: {
    pageSize: 100,        // Show more results on the map
    showPagination: false, // Hide pagination for map view
    showResultsCount: true,
    showSort: false,       // Hide sort controls for map view
  },
  icon: 'map',
  label: 'Kaart weergave',
  presentationConfig: MAP_PRESENTATION_CONFIG,
}
```

### Changing View Order

The order of views in the view switcher is controlled by the order in the `views` array. Simply reorder the view configurations:

```ts
export const SEARCH_VIEWS_CONFIG: ViewsConfig = {
  views: [
    // Grid view will appear first in the switcher
    {
      type: 'grid',
      // ...
    },
    // List view will appear second
    {
      type: 'list',
      // ...
    },
    // Map view will appear last
    {
      type: 'map',
      // ...
    },
  ],
  defaultView: 'grid',
};
```

### Removing a View

To remove a view, simply delete its configuration from the `views` array and update `defaultView` if needed:

```ts
export const SEARCH_VIEWS_CONFIG: ViewsConfig = {
  views: [
    {
      type: 'list',
      // ...
    },
    // Grid view removed
    {
      type: 'map',
      // ...
    },
  ],
  defaultView: 'list',
};
```

## View-Specific Presentation Configurations

Each view can have its own [object presentation configuration](/guide/configuring-object-presentation) that controls how heritage objects are displayed.

For example: A **List View** might show thumbnails on the left with title, description, and metadata.

```ts
{
  type: 'list',
  componentId: 'list-view',
  options: { /* ... */ },
  icon: 'list',
  label: 'Lijst weergave',
  presentationConfig: LIST_PRESENTATION_CONFIG, // Specific to list view
}
```

See [Configuring Object Presentation](/guide/configuring-object-presentation) for details on creating and customizing presentation configurations.
