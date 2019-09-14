import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.axios=axios;

Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
});

//创建全局的组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
