import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
import Consts from './plugin/variablename'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import './css/all_css_config.css'

Vue.use(Lazyload);
Vue.use(Vant)
Vue.use(Consts)
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
