import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { Amplify } from 'aws-amplify'
import AwsExports from './aws-exports'
import {
  applyPolyfills,
  defineCustomElements
} from '@aws-amplify/ui-components/loader'
Amplify.configure(AwsExports)
applyPolyfills().then(() => {
  defineCustomElements(window)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
