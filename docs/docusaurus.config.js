// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { ProvidePlugin } from 'webpack'
import { themes } from 'prism-react-renderer'
import ModuleScopePlugin from 'react-dev-utils/ModuleScopePlugin'
import { realpathSync } from 'fs'
import { join, resolve as _resolve } from 'path'
const clientDir = join(__dirname, '..', 'client')

const LibrariesToTranspile = ['copy-text-to-clipboard']

const LibrariesToTranspileRegex = new RegExp(
  LibrariesToTranspile.map((libName) => `(node_modules/${libName})`).join('|')
)

/**
 * @param {string} modulePath
 */
function excludeJS(modulePath) {
  // Always transpile client dir
  if (modulePath.startsWith(clientDir)) {
    return false
  }
  // Don't transpile node_modules except any docusaurus npm package
  return (
    modulePath.includes('node_modules') &&
    !/docusaurus(?:(?!node_modules).)*\.jsx?$/.test(modulePath) &&
    !LibrariesToTranspileRegex.test(modulePath)
  )
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Development Framework',
  tagline:
    'The framework consists of a collection of libraries, tools and services that can be used to accelerate the building process and maintenance of applications and domain models based on blueprints.',
  url: 'https://data-modelling-tool.app.radix.equinor.com/',
  baseUrl: '/dm-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn', // favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'equinor', // Usually your GitHub org/user name.
  projectName: 'dm-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: '/',
      },
    ],
    function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils) {
          config.plugins = config.plugins.filter(
            (plugin) => !(plugin instanceof ModuleScopePlugin)
          )
          let rule = config.module.rules[5]
          // @ts-ignore
          rule.exclude = excludeJS
          config.resolve.roots = [
            ...config.resolve.roots,
            _resolve(__dirname, '../web/packages/dmt-core'),
          ]
          // @ts-ignore
          rule.include = [
            realpathSync(join(__dirname)),
            realpathSync(
              join(
                __dirname,
                './node_modules/@development-framework/dm-core/src'
              )
            ),
          ]
          config.resolve.alias['react'] = _resolve(
            __dirname,
            './node_modules/react'
          )
          config.resolve.alias['react-dom'] = _resolve(
            __dirname,
            './node_modules/react-dom'
          )
          config.plugins.push(
            new ProvidePlugin({
              process: 'process/browser.js',
            })
          )
          return {
            resolve: {
              fallback: {
                path: require.resolve('path-browserify'),
                fs: false,
              },
              symlinks: true,
            },
          }
        },
      }
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Development Framework', //logo: {
        //    alt: 'My Site Logo',
        //    src: 'img/logo.svg',
        //},
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'community',
            docsPluginId: 'community',
            position: 'left',
            label: 'Community',
          },
          {
            href: 'https://github.com/equinor/dm-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/equinor/dm-docs/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Community',
                to: '/community',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/equinor/dm-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Equinor`,
      },
      prism: {
        theme: themes.vsLight,
        darkTheme: themes.vsDark,
        additionalLanguages: ['json', 'bash'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '6R4H64BKKF',

        // Search API key. NB! This API key must NOT have access to anything other than search.
        apiKey: '128a2fffd1b0aa5c7bd4e061e8a06982',

        indexName: 'dm-docs-indices',

        // Optional: see doc section below
        contextualSearch: true,

        //... other Algolia params
      },
    }),
}

export default config
