<template>
  <section class="i18n">
    <section class="controlbox">
      <button
        :class="{ selected: locale === lang }"
        v-for="{ lang, langName } in languages"
        @click="changeLocale(lang)"
      >
        {{ langName }}
      </button>
    </section>
    <p>{{ $t("hello") }}</p>
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
    changeLocale(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
<style lang="scss" scoped>
.i18n {
  .controlbox {
    margin: 3rem 0;
    button {
      width: 7rem;
      &:hover {
        background-color: rgba($primary-text-color, 0.5);
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
      &.selected {
        background-color: $primary-text-color;
        color: white;
      }
    }
  }
  p {
    color: $primary-text-color;
    font-weight: bolder;
    font-size: 2rem;
  }
}
</style>
