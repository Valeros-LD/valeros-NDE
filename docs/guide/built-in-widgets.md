# Built-in Widgets

Valeros comes with a comprehensive set of built-in widgets for common use cases. Each widget can be configured using base options (available to all widgets) and component-specific options.

## Generic Widgets

### TextWidget

**Component ID**: `text-widget`

Simple text display for descriptive content.

**Example Properties**: `description`, `dateCreated`, `birthDate`, `deathDate`

**Component-Specific Options** (`TextWidgetOptions`):

- **`asHeader`** - Render text as a header
- **`largeFont`** - Use larger font size
- **`maxLength`** - Truncate text at specified length
- **`enableHighlights`** - Enable search term highlighting

**Example**:

```ts
{
  id: 'description',
  properties: ['description'],
  componentId: 'text-widget',
  options: {
    propertyLabel: 'Description',
    largeFont: true,
    maxLength: 200,
  },
}
```

### LinkWidget

**Component ID**: `link-widget`

Displays clickable links to entities and concepts. Uses `TextWidgetOptions` for literal values.

**Example Properties**: `creator`, `publisher`, `about`, `genre`, `material`, `hasOccupation`

**Component-Specific Options** (`TextWidgetOptions`):

- **`asHeader`** - Render text as a header
- **`largeFont`** - Use larger font size
- **`maxLength`** - Truncate text at specified length
- **`enableHighlights`** - Enable search term highlighting

**Example**:

```ts
{
  id: 'creator',
  properties: ['creator'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Creator',
    icon: 'user',
  },
}
```

### ImageGalleryWidget

**Component ID**: `image-gallery-widget`

Image gallery with zoom and [PhotoSwipe](https://photoswipe.com/) lightbox.

**Example Properties**: `associatedMedia`

**Component-Specific Options** (`ImageGalleryWidgetOptions`):

- **`maxThumbnails`** - Maximum number of thumbnails to display
- **`enableLightbox`** - Enable PhotoSwipe lightbox functionality

**Example**:

```ts
{
  id: 'image-thumb',
  properties: ['associatedMedia'],
  componentId: 'image-gallery-widget',
  options: {
    position: 'top',
    maxThumbnails: 1,
    enableLightbox: false,
    noPadding: true,
  },
}
```

### MapWidget

**Component ID**: `map-widget`

Geographic visualization with [Leaflet](https://github.com/Leaflet/Leaflet).

**Example Properties**: `contentLocation`, `location`, `birthPlace`, `deathPlace`, `geo`

**Example**:

```ts
{
  id: 'location',
  properties: ['contentLocation', 'location'],
  componentId: 'map-widget',
  options: {
    propertyLabel: 'Location',
    icon: 'map-pin',
    showOriginalLink: true,
  },
}
```

### MediaWidget

**Component ID**: `media-widget`

Orchestrator widget that selects the appropriate media viewer based on available data.

**Example Properties**: `associatedMedia`

**Automatically selects**:

- **IIIF viewer** - When IIIF Presentation manifest is available (Tify, Mirador, or UniversalViewer)
- **ImageGalleryWidget** - When no IIIF manifest is available

::: warning TODO
Pass preferred IIIF viewer as config to media widget and document it here
:::

**Example**:

```ts
{
  id: 'media',
  properties: ['associatedMedia'],
  componentId: 'media-widget',
  options: {
    showPropertyLabel: false,
    position: 'left',
  },
}
```

### JsonWidget

**Component ID**: `json-widget`

Fallback widget for unmapped properties. Displays raw JSON data.

**Used for**: Any property without specific widget mapping

### ReferringNodesWidget

**Component ID**: `referring-nodes-widget`

Displays objects that reference the current object.

**Example Properties**: `id`

**Example**:

```ts
{
  id: 'referring-nodes',
  properties: ['id'],
  componentId: 'referring-nodes-widget',
  options: {
    propertyLabel: 'Referring Objects',
    icon: 'link',
  },
}
```

### SeparatorWidget

**Component ID**: `separator-widget`

Visual separator between sections.

**Component-Specific Options** (`SeparatorWidgetOptions`):

- **`header`** - Optional header text for the separator

**Example**:

```ts
{
  id: 'separator',
  properties: [],
  componentId: 'separator-widget',
  options: {
    showPropertyLabel: false,
    header: 'Additional Information',
  },
}
```

## Domain-Specific Widgets

### AddressWidget

**Component ID**: `address-widget`

Displays [postal addresses](https://docs.nde.nl/schema-profile/#PostalAddress) in a formatted way.

**Example Properties**: `address`

**Example**:

```ts
{
  id: 'address',
  properties: ['address'],
  componentId: 'address-widget',
  options: {
    propertyLabel: 'Address',
    icon: 'home',
  },
}
```

### DatasetWidget

**Component ID**: `dataset-widget`

Shows [dataset](https://docs.nde.nl/schema-profile/#CreativeWork-isPartOf) information. Filters for Dataset type within `isPartOf` property.

**Example Properties**: `isPartOf`

**Example**:

```ts
{
  id: 'dataset',
  properties: ['isPartOf'],
  componentId: 'dataset-widget',
  options: {
    propertyLabel: 'Dataset',
    icon: 'archive',
  },
}
```
