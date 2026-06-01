# Configuring Data Presentation

Valeros allows you to control how data is displayed to end users through simple configuration files.

## Presentation Configuration Files

Data presentation is controlled through configuration files in `src/app/config/presentation/`:

- **`list-presentation.config.ts`** - Configure how objects appear in list view
- **`grid-presentation.config.ts`** - Configure how objects appear in grid view
- **`map-presentation.config.ts`** - Configure how objects appear on the map
- **`details-presentation.config.ts`** - Configure how objects appear on the details page

Each configuration file exports a `NodePresentationConfig` object that defines which widgets are available and how they should be displayed.

::: info "Objects" or "nodes"?
Throughout this documentation, we use "object" and "node" somewhat interchangeably. Internally, Valeros uses "node" in the linked data sense (hence `NodePresentationConfig`), but in these guides we typically use "object" for clarity. Both refer to the same thing: a heritage object, person, place, or other entity in your dataset.
:::

## Basic Structure

A presentation config has the following structure:

```ts
export const DETAILS_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [
    nameWidget,
    descriptionWidget,
    mediaWidget,
    // ... more widgets
  ],
  displayedWidgetIds: ['name', 'description', 'media'],
  fallbackWidget: fallbackWidget,
  showArrowIndicator: true,
};
```

### Configuration Properties

- **`widgets`** - Array of all available widgets for this view
- **`displayedWidgetIds`** - Array of widget IDs that controls which widgets are shown and in which order
- **`fallbackWidget`** - Widget to use when a property has no matching widget
- **`showArrowIndicator`** - Whether to show an arrow indicator on clickable items (optional)

## What is a Widget?

The **widget system** is the core of Valeros's configuration-driven approach. Widgets let you map data properties (`creator`, `dateCreated`, `associatedMedia`, ...) to visual components (`LinkWidget`, `TextWidget`, `MediaWidget`, ...) **without writing code**. Instead of building custom components for each data type, you configure which (reusable) widgets handle which properties.

## Understanding Widgets

Each widget is an object that connects data properties to visual components:

```ts
export const materialWidget: Widget = {
  id: 'material',
  properties: ['material'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Materiaal',
    icon: 'package',
  },
};
```

### Widget Properties

- **`id`** - Unique identifier for the widget
- **`properties`** - Array of data property names this widget handles
- **`componentId`** - The component used to render this widget (see [Built-in Widgets](/guide/built-in-widgets) for available components)
- **`options`** - Configuration options passed to the widget component (optional)

### Widget Options

All widgets support **base options** like `propertyLabel`, `icon`, and `position` (defined in `BaseWidgetOptions`).

Individual widget components can extend these with **component-specific options**. For example, `TextWidgetOptions` (used by `TextWidget`) extends `BaseWidgetOptions` to add `maxLength`, `largeFont`, and other text-specific options.

## Common Tasks

### Changing Widget Order

The order of widgets is controlled by the `displayedWidgetIds` array. Simply reorder the IDs:

```ts
export const DETAILS_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [nameWidget, descriptionWidget, mediaWidget],
  displayedWidgetIds: [
    'media', // Shows first
    'name', // Shows second
    'description', // Shows third
  ],
  // ...
};
```

**Using `*` to show remaining widgets**

Use the wildcard `*` to automatically include all widgets that aren't explicitly listed:

```ts
displayedWidgetIds: [
  'name', // Explicitly first
  'description', // Explicitly second
  '*', // All remaining widgets, sorted alphabetically by property
  'dataset', // Explicitly at the end
];
```

::: tip
The wildcard behavior is implemented in `WidgetService`. To customize how widgets are ordered or filtered, check out `src/app/widgets/widget.service.ts`.
:::

### Showing Widgets for Properties

To display a widget for a property in your data, create a widget configuration that maps the property to an existing widget component.

**Option 1: Define in `widgets.ts` (recommended for reusability)**

```ts
export const customWidget: Widget = {
  id: 'custom',
  properties: ['customProperty'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Custom Field',
    icon: 'star',
  },
};
```

Then import and add it to your presentation config:

```ts
import { customWidget } from './widgets/widgets';

export const DETAILS_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [
    nameWidget,
    customWidget,
    // ...
  ],
  displayedWidgetIds: ['name', 'custom'],
  // ...
};
```

**Option 2: Define inline (for view-specific widgets)**

```ts
export const DETAILS_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [
    nameWidget,
    {
      id: 'custom',
      properties: ['customProperty'],
      componentId: 'link-widget',
      options: {
        propertyLabel: 'Custom Field',
        icon: 'star',
      },
    },
  ],
  displayedWidgetIds: ['name', 'custom'],
  // ...
};
```

::: tip
This section covers using existing widgets (see [Built-in Widgets](/guide/built-in-widgets)) for your properties. To create entirely new widget components with custom functionality, see [Creating Custom Widgets](/guide/custom-widgets).
:::

### Passing Custom Options to Widgets

Widget options allow you to customize behavior. Here's an example with multiple options:

```ts
export const descriptionWidget: Widget = {
  id: 'description',
  properties: ['description'],
  componentId: 'link-widget',
  options: {
    showPropertyLabel: false, // Hide the property label
    largeFont: true, // Use larger font
    maxLength: 200, // Truncate at 200 characters
  },
};
```

Different widget components accept different options. Check the widget's implementation to see available options.

### Widgets Without Properties

Widgets can have an empty `properties` array if they don't depend on specific data properties:

```ts
export const separatorWidget: Widget = {
  id: 'separator',
  properties: [], // No properties needed
  componentId: 'separator-widget',
  options: {
    showPropertyLabel: false,
  },
};
```

These widgets will only appear if their ID is listed in `displayedWidgetIds`:

```ts
displayedWidgetIds: [
  'name',
  'separator', // Must be explicitly included
  'description',
];
```

## Widget Positioning

Widgets can be positioned in different areas using the `position` option.

### Available Positions

- **`top`** - Full-width area at the top
- **`left`** - Left sidebar (on desktop)
- **`main`** - Main content area (default)
- **`right`** - Right sidebar (on desktop)
- **`bottom`** - Full-width area at the bottom

TODO: Add screenshot showing the layout positions

### Example: Positioning Widgets

```ts
export const mediaWidget: Widget = {
  id: 'media',
  properties: ['associatedMedia'],
  componentId: 'media-widget',
  options: {
    showPropertyLabel: false,
    position: 'left', // Display in left sidebar
  },
};

export const imageThumbWidget: Widget = {
  id: 'image-thumb',
  properties: ['associatedMedia'],
  componentId: 'image-gallery-widget',
  options: {
    position: 'top', // Display at the top
    noPadding: true, // Extend edge-to-edge, strip default padding
  },
};
```

### Responsive Behavior

On mobile devices, the layout collapses into a single column in this order:

1. Top
2. Left
3. Main
4. Right
5. Bottom

TODO: Add video showing collapsing behavior
