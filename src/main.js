// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

var toastrConfigs = {
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
  template: '<App/>',
  components: {App}
})
