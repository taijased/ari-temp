import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/font.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import i18n from './i18n'
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
