# Image Paths Configuration

The image paths configuration tells Valeros where to find image URLs in your heritage object data.

## Image Paths Configuration File

**Location:** `src/app/config/image-paths.config.ts`

Defines which properties contain image URLs. These paths are used by the `NodeImageResolverService` to locate and extract image URLs from heritage object data.

```ts
export const IMAGE_PATHS_CONFIG: string[] = [
  'image',
  'thumbnailUrl',
  'associatedMedia.thumbnailUrl',
];
```

::: info
Currently, data layer properties are based on the [Schema.org Application Profile for NDE (SCHEMA-AP-NDE)](https://docs.nde.nl/schema-profile/), but this might change in the future.
:::

## How It Works

When Valeros needs to display an image for a heritage object, it checks each path in the array in order and uses the first image URL it finds.

For example, with the configuration above:

1. First checks if the object has an `image` property
2. If not found, checks for `thumbnailUrl`
3. If not found, checks for `associatedMedia.thumbnailUrl`
4. If none are found, displays a fallback image
