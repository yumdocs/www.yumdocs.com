// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const projectName = 'www.yumdocs.com';
const organizationName = 'yumdocs';

const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yumdocs',
  tagline: 'Template engine for Office documents',
  url: `https://${projectName}`,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // also...
  // customFields: {},
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Will be passed to @docusaurus/plugin-content-blog (false to disable)
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/master/`,
        },
        */
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/master/`,
        },
        // Will be passed to @docusaurus/plugin-google-analytics (only enabled when explicitly specified)
        // googleAnalytics: {},
        // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
        gtag: {
          trackingID: 'GTM-MDB69DD',
          anonymizeIP: false,
        },
        // Will be passed to @docusaurus/plugin-content-pages (false to disable)
        // pages: {},
        // Will be passed to @docusaurus/plugin-content-sitemap (false to disable)
        // sitemap: {},
        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        footer: {
          // style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Documentation',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [/*
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },*/
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/yumdocs',
                },
              ],
            },
            {
              title: 'More',
              items: [
                /* {
                  label: 'Blog',
                  to: '/blog',
                }, */
                {
                  label: 'GitHub',
                  href: 'https://github.com/yumdocs/yumdocs',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Jacques L. Chereau - All rights reserved.`,
        },
        metadata: [
          {name:'keywords', content:'Microsoft Office, Word, PowerPoint, Excel, docx, pptx, xlsx, Open XML, json, automation, generation, creation, automate, generate, create, merge, template, engine, Node, JavaScript, js, TypeScript'}
        ],
        navbar: {
          title: 'Yumdocs',
          logo: {
            alt: 'Yumdocs Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Documentation',
            },
            /* {to: '/blog', label: 'Blog', position: 'left'}, */
            {
              href: 'https://github.com/yumdocs/yumdocs',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  /*
  plugins: [
    () => ({
      name: 'lottie-webpack-plugin',
      configureWebpack: () => ({
        module: {
          rules: [
            {
              test: /\.json$/, // <--- or /\.json$/ if you want generic
              type: 'json'
              // No loader needed: 'type: json' is supported in webpack 5
            },
          ],
        },
      }),
    }),
  ],
  */

};

module.exports = config;
