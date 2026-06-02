# Configuration UI (Experimental)

We're currently experimenting with a UI for changing configuration at runtime. This feature would allow you to adjust all of the [configuration settings](/guide/configuration-system) through a visual interface, without needing to edit TypeScript files or write code.

<video controls width="100%" style="max-width: 800px; margin: 1rem 0;">
  <source src="./config-ui.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Components

The configuration UI consists of two main components:

### Config Panel

**Location:** `src/app/config/config-panel/`

The config panel provides a draggable overlay interface that can be opened via a floating action button in the bottom-right corner of the application.

### Config Page

**Location:** `src/app/config/config-page/`

The config page component contains the actual configuration interface that is rendered inside the config panel. This is where users can view and modify configuration settings.

## Goals

The goal is to provide:

- A user-friendly interface for tweaking configuration settings
- Real-time preview of changes
- The ability to export and deploy updated configurations

This would make configuration accessible to users without technical skills, enabling anyone to customize Valeros without needing to understand TypeScript or code.

::: warning Work in Progress
This feature is still in active development. The UI and functionality may change significantly.
:::
