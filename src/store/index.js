import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex)

const commonStore = {
  state: {
  },
  mutations: {
  },
  actions: {
  },
}

const store = Promise.all(modules).then(modules =>
  new Vuex.Store({
    ...commonStore,
    modules: modules.reduce((acc, { name, module }) =>
    ({...acc, [name]: module})
    , {})
  })
)

export default store