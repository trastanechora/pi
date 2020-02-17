import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

const config = {
  mode: 'spa',
  server: {
    port: process.env.PORT || 3030
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
    app_title: process.env.APP_TITLE,
    app_short_title: process.env.APP_SHORT_TITLE,
    api_url: process.env.API_URL
  },
  manifest: {
    lang: 'id',
    name: process.env.APP_TITLE,
    short_name: process.env.APP_SHORT_TITLE,
    theme_color: '#19bd00',
    display: 'standalone'
  },
  // Headers of the page
  head: {
    title: process.env.APP_TITLE || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // Customize the progress-bar color
  loading: { color: '#19bd00' },
  // Global CSS
  css: ['~/assets/style/app.css'],
  // Plugins to load before mounting the App
  plugins: [],
  // Nuxt.js dev-modules
  buildModules: ['@nuxtjs/vuetify'],
  // Nuxt.js modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  // Render opt
  render: {
    bundleRenderer: {
      shouldPrefetch: (type) => ['script', 'style'].includes(type)
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        custom: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  // Build configuration
  build: {
    // You can extend webpack config here
    // extend(config, ctx) { }
  }
}

export default config
