import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'remons-components',
  favicon: '/images/favicon.ico',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config,
  mfsu: {},
  dynamicImport: {},
  base: '/remons-components/',
  publicPath: '/remons-components/',
  exportStatic: {},
});
