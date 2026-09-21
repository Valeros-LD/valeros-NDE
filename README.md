# Valeros

> [!WARNING]  
> This project is currently in active development and not yet ready for production use.

<a href="https://valeros.nl" target="_blank"><img width="3023" height="1554" alt="image" src="https://github.com/user-attachments/assets/27c2adbd-d500-4b90-8bdc-46e7a0b3807a" /></a>

Valeros is a **reusable, flexible heritage data browser**.

It is designed as a standard solution for **targeted search** and **browsing and discovery** of heritage data. See the [Netwerk Digitaal Erfgoed](https://netwerkdigitaalerfgoed.nl/en/) (NDE) [behavior profiles publication](https://zenodo.org/records/14938780) for more information about these types of users and their needs.

As a developer, Valeros lets you control what, how, and when data is shown to end users through **simple configuration files**.

## Prerequisites

> [!IMPORTANT]
> Valeros requires a **data layer** endpoint to function. NDE's specification is still in development, so both GraphQL and REST are supported. See [Getting Started](https://docs.valeros.nl/guide/getting-started.html) for available implementations.

- [Node.js](https://nodejs.org/) v20.19.0 (or newer) and [pnpm](https://pnpm.io/)
- A data layer endpoint (see above)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Valeros-LD/Valeros-NDE.git
cd Valeros-NDE
npm install
```

## Configuration

Valeros is configured through `apps/valeros/public/config/valeros.config.json`. To get started, set the data layer protocol and URL:

```json
{
  "$schema": "./valeros.config.schema.json",
  "api": {
    "type": "graphql",
    "baseUrl": "http://localhost:4000/graphql"
  }
}
```

Use the Configurator app (`pnpm run configurator:dev`) to edit all Valeros settings through an intuitive UI. See [docs.valeros.nl](https://docs.valeros.nl) for the full configuration reference.

## Running the Application

Start the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/` to see the application in action.

## Documentation

You can find more information on how to use and configure Valeros at [docs.valeros.nl](https://docs.valeros.nl).

## License

See [LICENSE.md](LICENSE.md)
