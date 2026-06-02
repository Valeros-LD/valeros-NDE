# Styling Valeros

Valeros uses [TailwindCSS](https://tailwindcss.com/) for styling, with [DaisyUI](https://daisyui.com/) as the component library.

## Using Tailwind Classes

Throughout the application, you can use Tailwind utility classes directly in component templates.

For example:

```html
<div class="bg-app-bg p-4 rounded-lg">
  <h1 class="text-primary font-sans text-2xl">Heritage Object</h1>
</div>
```

::: tip
Tailwind strips all default browser styles, so elements like `<h2>` won't have any styling unless you add utility classes.
:::

## DaisyUI Components

DaisyUI provides pre-styled components like buttons, cards, and modals. Refer to the [DaisyUI documentation](https://v4.daisyui.com/components/) for available components and their usage.

## Customizing Styles

Styling configuration is mostly managed in `tailwind.config.js` at the root of the project.

### Common Customizations

#### Fonts

By default, Valeros uses two fonts: a sans-serif font and a monospace font. You can customize these font families:

```js
fontFamily: {
  sans: ['"Familjen Grotesk"', 'sans-serif'],
  mono: ['"Space Mono"', 'monospace'],
}
```

#### Primary Color

The primary brand color is configured through DaisyUI's theme system (see [DaisyUI Theme Generator](https://v4.daisyui.com/theme-generator/)):

```js
daisyui: {
  themes: [
    {
      light: {
        ...require('daisyui/src/theming/themes')['light'],
        primary: '#00839F',
        'primary-content': '#ffffff',
      },
    },
  ],
}
```

#### Colors

Define custom colors for backgrounds and other elements:

```js
colors: {
  'app-bg': '#E1ECF2',
  'app-bg-dark': '#D1DCE2',
}
```
