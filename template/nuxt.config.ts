import { resolve } from 'path'
import consola from 'consola'
import getConfig from './config/index'

const nuxtEnv: string = process.env.NUXT_ENV || ''
consola.info(
  `Env properties: NUXT_ENV - ${nuxtEnv}, NODE_ENV - ${process.env.NODE_ENV}`
)
if (!nuxtEnv) {
  throw new Error('No NUXT_ENV is found, please check your startup command')
}

const projectConfig = getConfig(nuxtEnv)
const basePath: string = projectConfig.base.path

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
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
  /**
   * Nuxt envs
   */
  env: {
    NUXT_ENV: nuxtEnv || process.env.NODE_ENV || 'production',
    basePath
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
    '~/plugins/AxiosAccessor'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://typescript.nuxtjs.org/guide/
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
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
    babel: {
      // nuxt-property-decorator, Doc: https://www.npmjs.com/package/nuxt-property-decorator
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    },
    transpile: [
      'vuex-module-decorators'
    ],
    extend (config:any, ctx:any) {
      // You can extend webpack config here
    }
  },
  server: {
    port: projectConfig.base.port,
    host: projectConfig.base.host
  },
  router: {
    // base: `${basePath}/`
  }
}
