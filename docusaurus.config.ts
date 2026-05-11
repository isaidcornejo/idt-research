import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'IPI Research Platform',
  tagline: 'Structured research pages for collaborative inquiry',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://isaidcornejo.github.io',
  baseUrl: '/ipi-research/',

  organizationName: 'isaidcornejo',
  projectName: 'ipi-research',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/isaidcornejo/ipi-research/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IPI Research',
      logo: {
        alt: 'IPI Research Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Research',
        },
        {
          href: 'https://github.com/isaidcornejo/ipi-research',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Research',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Project Template',
              to: '/docs/template',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'Information Distinction Theory',
              to: '/docs/projects/idt',
            },
          ],
        },
        {
          title: 'Repository',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/isaidcornejo/ipi-research',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Isaid Cornejo. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;