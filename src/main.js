// bootstrap
import "bootstrap";
import JQuery from "jquery";
window.$ = JQuery;

// css & scss
import "bootstrap/scss/bootstrap.scss";
import "hooper/dist/hooper.css";
import "vue-scroll-picker/dist/style.css";

//libraries importing
import VueCountdown from "@chenfengyuan/vue-countdown";
import VueAnalytics from "vue-analytics";
import VueUploadComponent from "vue-upload-component";
import VueYoutube from "vue-youtube";
import VueScrollPicker from "vue-scroll-picker";
import _ from "underscore";

import Vue from "vue";
import App from "@/App.vue";

import { langWatcherPlugin } from "@/plugins/vuexPlugins";

Vue.component("file-upload", VueUploadComponent);
Vue.component(VueCountdown.name, VueCountdown);
Vue.use(VueScrollPicker);
Vue.prototype.$_ = _;

const init = async () => {
  const routerModule = await import("@/router");
  const router = await routerModule.default;
  const storeModule = await import("@/store");
  const store = await storeModule.default;
  const i18nModule = await import("@/locales");
  const i18n = await i18nModule.default;
  langWatcherPlugin(i18n, store);
  new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
  }).$mount("#app");
};

init();
