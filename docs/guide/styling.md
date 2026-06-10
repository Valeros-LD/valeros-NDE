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

## Themes

Valeros includes three pre-configured themes: **valeros-light** (default), **valeros-dark**, and **valeros-purple**.

<video controls width="100%" style="max-width: 800px; margin: 1rem 0;">
  <source src="./theme-switching.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Themes are defined in `tailwind.config.js` using DaisyUI's theme system with CSS variables for dynamic switching.

### Adding or Modifying Themes

Each theme is defined with CSS variables that control fonts, colors, and other properties:

```js
daisyui: {
  themes: [
    {
      'valeros-light': {
        ...require('daisyui/src/theming/themes')['light'],
        primary: '#00839F',
        'primary-content': '#ffffff',
        '--app-bg': '#E1ECF2',
        '--app-bg-dark': '#D1DCE2',
        '--font-sans': '"Familjen Grotesk", sans-serif',
        '--font-mono': '"Space Mono", monospace',
      },
    },
  ],
}
```

The Tailwind config references these CSS variables:

```js
fontFamily: {
  sans: ['var(--font-sans)', 'sans-serif'],
  mono: ['var(--font-mono)', 'monospace'],
},
colors: {
  'app-bg': 'var(--app-bg)',
  'app-bg-dark': 'var(--app-bg-dark)',
}
```

See the [DaisyUI Theme Generator](https://v4.daisyui.com/theme-generator/) for more customization options.

::: tip
When adding a new theme, remember to also add it to the theme switcher component at `src/app/config/config-page/theme-switcher/theme-switcher.component.ts`.
:::
