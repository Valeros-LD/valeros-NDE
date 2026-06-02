# Configuring Facets

Facets allow users to filter search results by properties like `dataset`, `location`, `creator`, and more. The facets themselves are returned by the data layer (see [API spec](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md#get-the-heritage-objects-collection)), but you can customize their presentation through configuration.

## Facets Configuration File

**Location:** `src/app/config/facets.config.ts`

## Basic Structure

```ts
export const FACETS_CONFIG: FacetConfig[] = [
  { name: 'dataset', label: 'Dataset', icon: 'archive' },
  { name: 'contentLocation', label: 'Locatie', icon: 'map-pin' },
  {
    name: 'creator',
    label: 'Vervaardiger',
    icon: 'user',
    hidden: true,
  },
  // ...
];
```

## Configuration Properties

Each facet configuration supports:

- **`name`** - Matches the facet name from the data layer (required)
- **`label`** - Display label in the UI (required)
- **`icon`** - Optional icon key from the [Icon Registry](/guide/icon-registry)
- **`hidden`** - Optional flag to hide the facet from the UI (default: `false`)
