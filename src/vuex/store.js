import Vue from 'vue'
import vuex from 'vuex'
import md5 from '../../static/js/md5.min'
Vue.use(vuex);

let store = new vuex.Store({
  state: {
    userType: 1,
    orderType: true,
    token: '', //登陆token
    sendHost: 'http://api.jkmy.com/v1', //本地服务器地址
    qiNiuServer: 'http://t-cdn.jinkaidoor.com/web' //七牛云测试服务器
    // sendHost: 'http://api.jinkaidoor.com/v1',  //正式服务器地址
    // qiNiuServer: 'http://cdn.jinkaidoor.com/web' //七牛云正式服务器
  },
  mutations: {
    orderType: (state, params) => (state.orderType = params),
    userType: (state, params) => (state.userType = params)
  },
  actions: {
    orderType({ commit }, params) {
      commit('orderType', params);
    },
    userType({ commit }, params) {
      commit('userType', params);
    }
  }
});
export default store

