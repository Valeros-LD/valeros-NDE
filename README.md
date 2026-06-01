# Valeros

> [!WARNING]  
> This project is currently in active development and not yet ready for production use.

<a href="https://valeros.nl" target="_blank"><img width="3023" height="1554" alt="image" src="https://github.com/user-attachments/assets/27c2adbd-d500-4b90-8bdc-46e7a0b3807a" /></a>

Valeros is a **reusable, flexible heritage data browser**.

It is designed as a standard solution for **targeted search** and **browsing and discovery** of heritage data. See the [Netwerk Digitaal Erfgoed](https://netwerkdigitaalerfgoed.nl/en/) (NDE) [user profiles publication](https://zenodo.org/records/14938780) for more information about these types of users and their needs.

As a developer, Valeros lets you control what, how, and when data is shown to end users through **simple configuration files**.


## Prerequisites

> [!IMPORTANT]
> Valeros is built on top of the [NDE](https://netwerkdigitaalerfgoed.nl/en/)'s [data layer API specification](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md). The data layer provides a standardized API for retrieving heritage datasets. Valeros consumes this API to power its search, filtering, and data presentation features.
> By default, Valeros works with a hosted [demo implementation](https://datalaag.valeros.nl/v1) (see [this repo](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers) for self-hosting), but you can also implement your own data layer following the [API specification](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/blob/main/apps/valeros-api/API.md).

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

## Documentation

You can find more information on how to use and configure Valeros at [docs.valeros.nl](https://docs.valeros.nl).

## License

See [LICENSE.md](LICENSE.md)
