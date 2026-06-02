# Data Layer Setup

Valeros connects to a data layer API to retrieve heritage objects. See [Architecture](/guide/#data-presentation-layers) for more information.

## API Configuration

**Location:** `src/app/config/api.config.ts`

Defines the data layer endpoint. To connect to a different data layer, update the `baseUrl`:

```ts
export const API_CONFIG: ApiConfig = {
  baseUrl: 'https://your-data-layer.example.com/v1',
};
```

::: info
The data layer must implement the NDE's [API specification](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md), which is still work-in-progress. See the [demo implementation](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers) for reference.
:::
