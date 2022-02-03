<template>
  <section class="i18n">
    <section class="Internationalization">
      <h1>Internationalization</h1>
      <section class="control">
        <button
          :class="{ selected: locale === lang }"
          v-for="{ lang, langName } in languages"
          :key="lang"
          @click="set_lang(lang)"
        >
          {{ langName }}
        </button>
      </section>
      <p>{{ $t("hello") }}</p>
    </section>
  </section>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "I18n",
  computed: {
    languages() {
      return Object.keys(this.$languages).map((key) => ({
        lang: key,
        langName: this.$languages[key],
      }));
    },
    locale() {
      return this.$i18n.locale;
    },
  },
  methods: {
    ...mapMutations(["set_lang"]),
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
