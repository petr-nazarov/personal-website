require('dotenv').config()
const title = 'Nazarov Petr | Node.js Developer & DevOps Engineer'
const description =
  'A personal page of Nazarov Petr - Full stack Node.js Developer & DevOps Engineer'
export default {
  mode: 'universal',
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      { name: 'og:title', content: title },
      {
        name: 'og:description',
        content: description
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'nazarov-petr.com' },
      { name: 'og:image', content: '/images/profile/profile_crop.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'canonical', href: 'https://petr-nazarov.com/' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap&subset=cyrillic'
      },
      {
        rel: 'stylesheet',
        href:'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
      }
    ]
  },
  server: {
    port: process.env.PORT, // default: 3000
    host: process.env.HOST // default: localhost,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/buefy.ts',
    '~plugins/fontawesome.ts',
    { src: '~plugins/smooth-scroll.ts', mode: 'client' },
    { src: '~plugins/AOS.ts', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://typescript.nuxtjs.org/
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/yandex-metrika
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '57556897',
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  }
}
