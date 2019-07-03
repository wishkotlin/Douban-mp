// import Vue from 'vue'
// import App from './index'

// // add this to handle exception
// // Vue.config.errorHandler = function (err) {
// //   if (console && console.error) {
// //     console.error(err)
// //   }
// // }
// // import { plugin } from 'vue-function-api'

// // Vue.use(plugin)

// const app = new Vue(App)
// app.$mount()

import pageFactory from 'mpvue-page-factory'
import App from './index'

Page(pageFactory(App))


