// NOTE: i18n locale에 맞춰 html lang 속성 자동 변경 plugin
const langWatcherPlugin = (i18n, store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === "set_lang") {
      i18n.locale = state.lang;
      document.querySelector("html").lang = state.lang;
    }
  });
};

export { langWatcherPlugin };
