import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import { getUserLocale } from "@/plugins/settingUtill";
Vue.use(Vuex);

const commonStore = {
  state: {
    lang: getUserLocale().lang,
    locale: getUserLocale().locale,
  },
  mutations: {
    set_lang(state, lang) {
      state.lang = lang;
      document.querySelector("html").lang = lang;
      localStorage.setItem("hello-vuejs-lang", lang);
    },
    set_locale(state, locale) {
      state.locale = locale;
      localStorage.setItem("hello-vuejs-locale", locale);
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
