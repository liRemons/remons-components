import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'remons-components',
  favicon: 'https://liremons.github.io/remons-components/images/favicon.ico',
  logo: 'https://liremons.github.io/remons-components/images/logo.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config,
  mfsu: {},
  dynamicImport: {},
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  base: '/remons-components/',
  publicPath: '/remons-components/',
  exportStatic: {},
});
