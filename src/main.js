import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

window.$ = window.jQuery = require('jquery')
// import '../semantic/dist/jquery.dataTables.min.js'
// import '../semantic/dist/dataTables.semanticui.min.js'
import '../semantic/dist/semantic.min.css'
// import '../semantic/dist/dataTables.semanticui.min.css'
import '../semantic/dist/semantic.min.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
