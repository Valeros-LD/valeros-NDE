import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid({
  title: 'Valeros',
  description: 'Reusable, flexible heritage data browser',

  themeConfig: {
    // logo: '/logo.svg',

    outline: {
      level: [2, 3],
    },

    nav: [
      { text: 'Guide', link: '/guide/' },
      {
        text: 'GitHub',
        link: 'https://github.com/Valeros-LD/Valeros-NDE',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Valeros?', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ],
        },
        {
          text: 'Configuration',
          items: [
            {
              text: 'Data Layer / API',
              link: '/guide/api-configuration',
            },

            {
              text: 'Facets',
              link: '/guide/facets-configuration',
            },
            {
              text: 'Search Views (List/Grid/Map)',
              link: '/guide/search-views',
            },
            {
              text: 'Object Presentation & Widgets',
              link: '/guide/configuring-object-presentation',
            },
            { text: 'Built-in Widgets', link: '/guide/built-in-widgets' },
            { text: 'Styling', link: '/guide/styling' },
          ],
        },
        {
          text: 'Reference',
          items: [
            {
              text: 'Configuration System',
              link: '/guide/configuration-system',
            },
            {
              text: 'Image Paths',
              link: '/guide/image-paths',
            },
            { text: 'Icon Registry', link: '/guide/icon-registry' },
          ],
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Creating Custom Widgets', link: '/guide/custom-widgets' },
            { text: 'Creating Custom Views', link: '/guide/custom-views' },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Valeros-LD/Valeros-NDE',
      },
    ],

    footer: {
      message: 'Released under the EUPL-1.2 License.',
    },

    search: {
      provider: 'local',
    },
  },

  mermaid: {},
});
