# Icon Registry

The icon registry manages all icons used throughout Valeros, providing type-safe icon references via the `IconKey` type.

## Icon Registry File

**Location:** `src/app/config/icon.registry.ts`

The registry maps icon IDs to icon components from the [@ng-icons](https://ng-icons.github.io/ng-icons/) library.

## Adding New Icons

To add a new icon to the registry:

### 1. Import the Icon

Import the icon from `@ng-icons/feather-icons` (or another icon set from [@ng-icons](https://ng-icons.github.io/ng-icons/)):

```ts
import {
  // ... existing imports
  featherNewIcon,
} from '@ng-icons/feather-icons';
```

### 2. Register the Icon

Add it to the `ICON_REGISTRY` object:

```ts
export const ICON_REGISTRY = {
  // ... existing icons
  'new-icon': featherNewIcon,
} as const;
```
