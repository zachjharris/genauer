const { description } = require('../../package');
const getConfig = require('vuepress-bar');
let { sidebar } = getConfig({ addReadMeToFirstGroup: false, maxLevel: 0 });
console.log(sidebar);
module.exports = {
  dest: '../pages',
  base: '/genauer/pages/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Reid Genauer Chords',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      //{
      //  text: 'Songs',
      //  link: '/songs/',
      //}
    ],
    sidebar: sidebar,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
