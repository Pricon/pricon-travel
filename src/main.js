import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// import axios from 'axios';
import { get, post } from "./network/http";


Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.prototype.$axios = axios;//把axios挂载到vue上
Vue.prototype.$get = get;
Vue.prototype.$post = post;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
