# Creating Custom Views

While Valeros provides [built-in views](/guide/search-views#built-in-view-types) (list, grid, map), you can create custom views for specialized search result presentations.

## When to Create a Custom View

Create a custom view when:

- You need a specialized layout for search results
- [Built-in views](/guide/search-views#built-in-view-types) don't provide the presentation you need

For simple customization, consider using [view options](/guide/search-views#view-options) with existing views first.

## Creating a View Component

### 1. Create the Component

Create a new [Angular component](https://angular.dev/essentials/components#defining-a-component) in `src/app/search/views/`:

```
src/app/search/views/
├── list-view/
│   ├── list-view.component.ts
│   └── list-view.component.html
└── your-view/
    ├── your-view.component.ts
    └── your-view.component.html
```

### 2. Extend BaseResultsView

Your component must extend `BaseResultsView` to access the view system's core functionality:

```ts
import { Component } from '@angular/core';
import { NodeComponent } from '../../node/node.component';
import { BaseResultsView } from '../base-results-view';

@Component({
  selector: 'app-your-view',
  imports: [NodeComponent],
  templateUrl: './your-view.component.html',
})
export class YourView extends BaseResultsView {}
```

### 3. Use BaseResultsView Properties

`BaseResultsView` provides these input properties:

- **`results()`** - Array of search result nodes (e.g., `[{ id: "...", type: "CreativeWork", name: "..." }, ...]`)
- **`totalResults()`** - Total number of results available
- **`currentPage()`** - Current page number
- **`pageSize()`** - Number of results per page
- **`options()`** - Configuration options passed from the view config (e.g., `{ pageSize: 20, showPagination: true, ... }`, see [View Options](/guide/search-views#view-options))
- **`presentationConfig()`** - [Object presentation configuration](/guide/configuring-object-presentation) for rendering nodes

### 4. Create the Template

Create your template using the base properties. Use `<app-node>` to render individual results:

```html
<div class="your-custom-layout">
  @for (result of results(); track result.id) {
  <app-node [data]="result" [presentationConfig]="presentationConfig()" />
  }
</div>
```

### 5. Register the View

Add your view to the registry in `src/app/config/views/view-component.registry.ts`:

```ts
import { YourView } from '../../search/views/your-view/your-view.component';

export const VIEW_COMPONENT_REGISTRY = {
  'list-view': ListViewComponent,
  'masonry-view': MasonryViewComponent,
  'map-view': MapViewComponent,
  'your-view': YourView, // Add your view
} as const;
```

### 6. Add View Type

Add your view type to `src/app/search/views/types/view-type.ts`:

```ts
export type ViewType = 'list' | 'grid' | 'map' | 'your-view';
```

### 7. Use in Configuration

Now you can use your view in the [views configuration](/guide/search-views#basic-structure):

```ts
export const SEARCH_VIEWS_CONFIG: ViewsConfig = {
  views: [
    {
      type: 'your-view',
      componentId: 'your-view',
      options: {
        pageSize: 20,
        showPagination: true,
        showResultsCount: true,
      },
      icon: 'layout-grid',
      label: 'Your View',
      presentationConfig: YOUR_PRESENTATION_CONFIG,
    },
    // ... other views
  ],
  defaultView: 'list',
};
```
