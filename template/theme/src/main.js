import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')