import Vue from 'vue'
import Router from 'vue-router'
const Common = () => import('@/components/common/Common')
const Login = () => import('@/components/login_reg/Login');
const Reg = () => import('@/components/login_reg/Reg');
const Find_pass = () => import('@/components/login_reg/Find_pass');
const Select_user = () => import('@/components/login_reg/Select_user');
const Improve_enterprise = () => import('@/components/login_reg/Improve_enterprise');
const Improve_user = () => import('@/components/login_reg/Improve_user');
const Audit = () => import('@/components/login_reg/Audit');
const Agreement = () => import('@/components/login_reg/Agreement');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Find_pass',
      name: 'Find_pass',
      component: Find_pass
    },
    {
      path: '/Select_user',
      name: 'Select_user',
      component: Select_user
    },
    {
      path: '/Improve_enterprise',
      name: 'Improve_enterprise',
      component: Improve_enterprise
    },
    {
      path: '/Improve_user',
      name: 'Improve_user',
      component: Improve_user
    },
    {
      path: '/Audit',
      name: 'Audit',
      component: Audit
    },
    {
      path: '/Agreement',
      name: 'Agreement',
      component: Agreement
    }
  ]
});
