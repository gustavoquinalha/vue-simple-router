import Vue from 'vue'
import App from './assets/App.vue'
import Erro from './assets/404.vue'
import Teste from './assets/Teste.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: App },
    { name: 'teste', path: '/teste', component: Teste },
    { name: 'Erro', path: '', component: Erro },
    { name: 'Erro', path: '*', component: Erro }
  ]
})

new Vue({
  router,
  el: '#app'
})
