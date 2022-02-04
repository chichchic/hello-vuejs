// NOTE: vuex에서 locale과 lang 정보 관리, vuex lang 변경시 i18n locale도 동시에 변경
const langWatcherPlugin = (i18n, store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === "set_lang") {
      i18n.locale = state.lang;
    }
  });
};

export { langWatcherPlugin };
