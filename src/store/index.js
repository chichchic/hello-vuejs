import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);

const commonStore = {
  state: {
    lang: "en",
  },
  mutations: {
    set_lang(state, lang) {
      state.lang = lang;
    },
  },
  actions: {},
};



const stores = Promise.all(modules).then(
  (modules) =>
    new Vuex.Store({
      ...commonStore,
      modules: modules.reduce(
        (acc, { name, module }) => ({ ...acc, [name]: module }),
        {}
      ),
    })
);

export default stores;
