import colors from 'vuetify/es5/util/colors'
// const environment = process.env.NODE_ENV
// const envSettings = require(`./env.${environment}.js`)

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - generate_sample',
    title: 'generate_sample',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // env:envSettings,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/vue2-google-maps.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
  ],
  axios:{
      proxy:true
  },
  proxy:{
    '/api':{
      target:'https://script.google.com/macros/s/AKfycbz2ZILu-1HnAQ2odVsdyp9Z8wk3HYRzvAb44m4Slph06lL3k3piXMULJsdf2YBQLznQ/exec',
      pathRewrite:{'^/api':''}
    }
  },
  
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate:{
    routes(){
      const route =[]
      const routes = [{
        path:'path1',
        name:{user:'iihara'}
      },{
        path:'path2',
        name:{user:'watanabe'}
      },{
        path:'path3',
        name:{user:'suzuki'}
      }];
      routes.map((item)=>{
        route.push({
          route: '/user/' + item.path,
          payload: {users: item}
        }),
        route.push({
          route: '/'+item.path +'/userInfo/',
            payload: {userInfo: {info:item,name:1}}
        }),
        route.push({
          route: '/'+item.path +'/userSetting/',
            payload: {userInfo: {info:item,name:2}}
        })
      })
      route.push({
        route:'/',
        payload:routes
      })
      return route
    }
  }
}
