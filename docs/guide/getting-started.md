# Getting Started

This guide will help you get Valeros up and running on your local machine.

## Prerequisites

::: info Data Layer Dependency
Valeros is built on top of the [NDE](https://netwerkdigitaalerfgoed.nl/en/)'s [data layer API specification](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md). The data layer provides a standardized API for retrieving heritage datasets. Valeros consumes this API to power its search, filtering, and data presentation features.

By default, Valeros works with a hosted [demo implementation](https://datalaag.valeros.nl/v1) (see [this repo](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers) for self-hosting), but you can also implement your own data layer following the [API specification](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md).
:::

- [Node.js](https://nodejs.org/) v20.19.0 (or newer) and [pnpm](https://pnpm.io/)
- A publicly available [data layer](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md) endpoint (the hosted demo at `https://datalaag.valeros.nl/v1` works out of the box)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Valeros-LD/Valeros-NDE.git
cd Valeros-NDE
pnpm install
```

## Configuration

Valeros is configured through a single JSON file at `apps/valeros/public/config/valeros.config.json`. The easiest way to configure it is through the Configurator app:

```bash
pnpm run configurator:dev
```

Open `http://localhost:5173/`, adjust settings, download the generated JSON, and replace the config file. To configure it directly or learn about the schema, see [Configuration System](/guide/configuration-system).

## Running the Application

Start the development server:

```bash
pnpm run start
```

Navigate to `http://localhost:4200/` to see the application in action.
