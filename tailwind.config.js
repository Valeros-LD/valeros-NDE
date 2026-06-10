/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        'app-bg': 'var(--app-bg)',
        'app-bg-dark': 'var(--app-bg-dark)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'valeros-light': {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#00839F',
          'primary-content': '#ffffff',
          '--rounded-btn': '9999px',
          '--app-bg': '#E1ECF2',
          '--app-bg-dark': '#D1DCE2',
          '--font-sans': '"Familjen Grotesk", sans-serif',
          '--font-mono': '"Space Mono", monospace',
        },
      },
      {
        'valeros-dark': {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#059e7a',
          'primary-content': 'black',
          '--rounded-btn': '9999px',
          '--app-bg': '#262626',
          '--app-bg-dark': '#212121',
          '--font-sans': '"Space Mono", sans-serif',
          '--font-mono': '"Space Mono", monospace',
        },
      },
      {
        'valeros-purple': {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#6e388f',
          'primary-content': '#ffffff',
          '--rounded-btn': '9999px',
          '--app-bg': '#e8e0f0',
          '--app-bg-dark': '#d8cfe0',
          '--font-sans': '"Nunito", sans-serif',
          '--font-mono': '"Space Mono", monospace',
        },
      },
    ],
  },
};
