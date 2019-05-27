import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { store } from './store';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/rate', component: App.components.Rate },
  { path: '/', component: App.components.Home },
  { path: '/result', component: App.components.Result },
  { path: '/history', component: App.components.History }
];


const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  store,
  router,
  created() {
    this.$store.dispatch('getRates')
  },
}).$mount('#app');
