import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken2,
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  iconfont: 'fa4',
  icons: {
    logout: 'fa fa-lg fa-sign-out'
  }
})
