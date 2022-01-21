<template>
  <section class="i18n">
    <section class="Internationalization">
      <h1>Internationalization</h1>
      <section class="control">
        <button
          :class="{ selected: locale === lang }"
          v-for="{ lang, langName } in languages"
          @click="changeLang(lang)"
        >
          {{ langName }}
        </button>
      </section>
      <p>{{ $t("hello") }}</p>
    </section>
  </section>
</template>
<script>
export default {
  name: "I18n",
  computed: {
    languages() {
      const used = new Set();
      return this.$localeInfo.reduce((acc, { lang, langName }) => {
        if (!used.has(lang)) {
          used.add(lang);
          acc.push({ lang, langName });
        }
        return acc;
      }, []);
    },
    locale() {
      return this.$i18n.locale;
    },
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
    changeLocale(locale) {
      this.curLocale = locale;
    },
  },
};
</script>
<style lang="scss" scoped>
.i18n {
  .Internationalization {
    margin: 3rem 0;
  }
}
</style>
