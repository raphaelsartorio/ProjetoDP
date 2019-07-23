// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
//import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false

require ('./assets/css/bootstrap.min.css');
require ('./assets/font-awesome/4.5.0/css/font-awesome.min.css');
require ('./assets/css/fonts.googleapis.com.css');
require ('./assets/css/ace.min.css');
require ('./assets/css/ace-part2.min.css');
require ('./assets/css/ace-rtl.min.css');
require ('./assets/js/ace-extra.min.js');
require ('./assets/js/jquery-2.1.4.min.js');
require ('./assets/js/bootstrap.min.js');
require ('./assets/js/jquery.ui.touch-punch.min.js');
require ('./assets/js/jquery.sparkline.index.min.js');
require ('./assets/js/jquery.flot.min.js');
require ('./assets/js/jquery.flot.pie.min.js');
require ('./assets/js/jquery.flot.resize.min.js');
require ('./assets/js/ace-elements.min.js');
require ('./assets/js/ace.min.js');


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})