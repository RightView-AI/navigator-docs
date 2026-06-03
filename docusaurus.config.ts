import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Navigator Help',
  tagline: 'Help center for clinical research teams using Navigator',
  favicon: 'img/rightview-square.png',

  future: {
    v4: true,
  },

  url: 'https://rightview-ai.github.io',
  baseUrl: '/navigator-docs/',

  organizationName: 'RightView-AI',
  projectName: 'navigator-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/rightview-square.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Help',
      logo: {
        alt: 'Rightview',
        src: 'img/rightview-white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userGuideSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          href: 'https://sites.rightview.ai',
          label: 'Open Navigator',
          position: 'right',
          className: 'navbar-cta-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Rightview',
        src: 'img/rightview-white.png',
        width: 140,
        height: 36,
      },
      links: [
        {
          title: 'Guide',
          items: [
            {label: "What's New", to: '/getting-started/whats-new'},
            {label: 'Upload Documents', to: '/collections/upload-documents'},
            {label: 'Access Control', to: '/collections/restrict-access'},
          ],
        },
        {
          title: 'Rightview',
          items: [
            {label: 'Navigator App', href: 'https://sites.rightview.ai'},
            {label: 'Contact Support', href: 'mailto:research@rightview.ai'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FirstSearch Inc dba Rightview. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
