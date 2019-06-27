import Vue from 'vue'
import App from './App'
import { plugin } from 'vue-function-api'

Vue.use(plugin)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
