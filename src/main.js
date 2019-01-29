// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../static/js/rem'
import router from './router'
import store from './vuex/store';
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' })

import http from './request/http' // 导入api接口
Vue.prototype.$http = http; // 将api挂载到vue的原型上

import VConsole from 'vconsole';
const vConsole = new VConsole(); // 不使用的时候，可以将这句屏蔽掉；

import { Header, Cell, Button, Toast, MessageBox } from "mint-ui"
Vue.component(Header.name, Header)
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.prototype.$messageBox = MessageBox;
Vue.prototype.$toast = Toast;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
