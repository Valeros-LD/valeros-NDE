# Getting Started

This guide will help you get Valeros up and running on your local machine.

## Prerequisites

::: info Data Layer Dependency
Valeros requires a **data layer** endpoint to query. NDE's data layer specification is still in development, so both GraphQL and REST protocols are supported. You select the protocol via `api.type` in the config file.

Available data layer implementations:

- **GraphQL** _(in development)_: [LOL (Linked Open Limburg)](https://codeberg.org/limburg/lol) provides a Docker Compose setup that spins up a local GraphQL endpoint at `http://localhost:4000/graphql`.
- **REST**: A hosted demo is available at `https://datalaag.valeros.nl/v1` (see [this repo](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers) for self-hosting).
  :::

- [Node.js](https://nodejs.org/) v20.19.0 (or newer) and [pnpm](https://pnpm.io/)
- A data layer endpoint (see above)

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
