import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import supersetDocsTheme, {getDefaultThemeConfig} from 'superset-docs-theme';

const config: Config = {
  title: 'SupersetBR',
  tagline: 'Tema do Apache Superset no padrão do Design System do Governo Federal do Brasil (DSGovBR)',
  favicon: 'img/favicon.jpg',

  url: 'https://superset-by-kelsoncm.github.io',
  baseUrl: '/superset-theme-dsgovbr/',

  organizationName: 'superset-by-kelsoncm',
  projectName: 'superset-theme-dsgovbr',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      supersetDocsTheme,
      {
        primaryColor: '#1351b4',
        secondaryColor: '#2670e8',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/superset-by-kelsoncm/superset-theme-dsgovbr/edit/main/docs/',
          exclude: ['conf.py', 'Makefile', 'make.bat', 'requirements.txt', '_build/**'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    ...getDefaultThemeConfig({
      projectName: 'SupersetBR',
      githubUrl: 'https://github.com/superset-by-kelsoncm/superset-theme-dsgovbr',
      logo: {alt: 'SupersetBR', src: 'img/logo.jpg'},
      showPoweredBy: true,
    }),
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
