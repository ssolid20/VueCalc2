import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueAxios, axios)
export const bus = new Vue()
Vue.config.productionTip = false

/*if('serviceWorker' in navigator ){
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}*/

const store = new Vuex.Store({
  state: {
    count: false,
    icon:'nights_stay',
    print:'print',
    output:'output',
    clean: false,
  },
  mutations: {
    increment (state) {
      state.count=!state.count;
      if (state.count === false) { state.icon = 'nights_stay'; state.print='print';state.output='output';state.clean=false}
      else{ state.icon='wb_sunny';state.print='print1';state.output='output1';state.clean=true}
    }
  }
})

new Vue({
  store:store,
  render: h => h(App)
}).$mount('#app')
