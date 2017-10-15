import Vue from 'vue'
import Home from './home.vue'
import Routes from './routes.js'
import Framework7Vue from 'Framework7Vue'



Vue.use(Framework7Vue);

export const promptBus = new Vue();

window.vue = new Vue({
  el: '#app',
  render: h => h(Home),
  // Framework7 Parameters
  framework7: {
      root: '#app', //Should be same as app el
      animateNavBackIcon: true,
      routes: Routes
  },
  created: function(){
    window.setTimeout(function() { window.vue.$children[0].toggleConnect(); },100);
  }
})
