module.exports = {
  /*
  ** Headers of the page
  */
  modules: [],
  router: {
    middleware: 'deviceChecker'
  },
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      // {
      //   src: 'https://use.fontawesome.com/releases/v5.7.2/js/all.js',
      //   integrity : "sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP",
      //   crossorigin : "anonymous",
      // }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico',  },
      { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",  integrity : "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr", crossorigin : "anonymous"},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=korean' },
    ]
  },
  css : [
    { src: '~assets/scss/base.scss', lang: 'scss'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    build: {
      babel: {
        presets: ['es2015', 'stage-0']
      }
    },
    vendor: ['axios','store'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/vue-notifications', ssr: false }
  ],
  serverMiddleware: [
    // API middleware
    '~/api/index.js',
  ]
}

