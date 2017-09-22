// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import CxltToastr from 'cxlt-vue2-toastr'
import Direcitve from './directive/directive'
import Filter from './filter/filter'
import axios from './api/http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import 'normalize.css'
import './assets/css/public.css'

Vue.use(ElementUI)

// 自定义指令 全局使用
Object.keys(Direcitve).forEach(key => {
  Vue.directive(key, Direcitve[key])
})
// 自定义过滤器 全局使用
Object.keys(Filter).forEach(key => {
  Vue.filter(key, Filter[key])
})

let toastrConfigs = {
  position: 'top right',
  showDuration: 2000,
  successColor: 'Green',
  infoColor: 'Blue',
  warningColor: 'Red',
  errorColor: 'yellow'
}
Vue.use(CxltToastr, toastrConfigs)

// 引用工具文件
import utils from './utils/index'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils
Vue.prototype.$api = api
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: {App}
})
