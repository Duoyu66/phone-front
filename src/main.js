import Vue from 'vue'
import router from './router/index'
import store from '@/store'
import App from './App.vue'
import {reqPhoto,reqCategoryList,reqGood} from './api'
reqPhoto();
reqCategoryList();
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
