import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import vueNews from '../modules/vuenews/'

var clientConfig = require('../../src/config.json')
var serverConfig = require('../../server/config.json')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    clientConfig: clientConfig,
    serverConfig: serverConfig
  },
  modules: {
    vueNews
  }
})

export default store
