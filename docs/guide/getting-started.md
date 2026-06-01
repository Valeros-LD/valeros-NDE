# Getting Started

This guide will help you get Valeros up and running on your local machine.

## Tech Stack

Valeros is built with [Angular](https://angular.dev/) following the [Angular style guide](https://angular.dev/style-guide). We use modern Angular features including [signals](https://angular.dev/essentials/signals) for reactive state management, [standalone components](https://angular.dev/essentials/components), and [control flow syntax](https://angular.dev/guide/templates/control-flow). For styling, we use [**TailwindCSS**](https://tailwindcss.com/) with [**DaisyUI**](https://daisyui.com/) as the component library.

## Prerequisites

::: info Data Layer Dependency
Valeros is built on top of the [NDE](https://netwerkdigitaalerfgoed.nl/en/)'s [data layer API specification](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md). The data layer provides a standardized API for retrieving heritage datasets. Valeros consumes this API to power its search, filtering, and data presentation features.

By default, Valeros works with a hosted [demo implementation](https://datalaag.valeros.nl/v1) (see [this repo](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers) for self-hosting), but you can also implement your own data layer following the [API specification](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md).
:::

- [Node.js](https://nodejs.org/) v20.19.0 (or newer) and [npm](https://www.npmjs.com/)
- A publicly available [data layer](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md) endpoint (the hosted demo at `https://datalaag.valeros.nl/v1` works out of the box)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Valeros-LD/Valeros-NDE.git
cd Valeros-NDE
npm install
```

## Configuration

To use a different data layer endpoint, update the `baseUrl` in `src/app/config/api.config.ts`:

```typescript
export const API_CONFIG: ApiConfig = {
  baseUrl: 'https://datalaag.valeros.nl/v1', // Change this to your data layer URL
};
```

## Running the Application

Start the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/` to see the application in action.
