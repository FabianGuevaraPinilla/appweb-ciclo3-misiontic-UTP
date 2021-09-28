import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importando los componentes de Bootstrap
import "bootstrap/dist/css/bootstrap.css";

//Importando la libreria mdi
import "@mdi/font/css/materialdesignicons.min.css";

// Libreria para las alertas
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

