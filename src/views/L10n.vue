<template>
  <section class="l10n">
    <h1>Localization</h1>
    <section class="control">
      <button
        v-for="{ locale: curLocale, localeName, lang } in $locales"
        :class="{ selected: curLocale === locale }"
        :key="curLocale"
        @click="set_preference({ locale: curLocale, lang })"
      >
        {{ localeName }}
      </button>
    </section>
    <div class="input-wrapper">
      <label for="amount"> {{ $t("amount") }}: </label>
      <input id="amount" type="number" v-model="amount" min="0" />
    </div>
    <div class="input-wrapper">
      <label for="unit-price"> {{ $t("unitPrice") }}: </label>
      <input id="unit-price" type="number" v-model="unitPrice" min="0" />
      {{ currencySymbol }}
    </div>
    <p :class="{ arrabic: isArabic }" :dir="attrDir">
      <span
        >{{
          $tc("bananaAmount", amount, {
            amount: $n(amount, "number", locale),
          })
        }}
      </span>
      <span>,</span>&nbsp;
      <span>
        {{ $n(unitPrice * amount, "currency", locale) }}
      </span>
    </p>
  </section>
</template>
<script>
import { extractNonNumber } from "@/plugins/extractString";
import { mapActions, mapState } from "vuex";

export default {
  name: "L10n",
  data: () => ({
    amount: 1,
    unitPrice: 3000,
  }),
  computed: {
    ...mapState(["locale", "lang"]),
    isArabic() {
      return this.lang === "ar";
    },
    attrDir() {
      return this.isArabic ? "rtl" : "ltr";
    },
    currencySymbol() {
      return extractNonNumber(this.$n(null, "currency", this.locale))[0];
    },
  },
  methods: {
    ...mapActions(["set_preference"]),
  },
  mounted() {
    this.set_preference({ lang: this.locale.slice(0, 2) });
  },
};
</script>
<style lang="scss" scoped>
.l10n {
  .input-wrapper {
    font-size: 2rem;
    margin-bottom: 1rem;
    input {
      padding-left: 1rem;
      margin-left: 1rem;
      width: 10rem;
    }
  }
  p {
    display: inline-block;
  }
  .arrabic {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
}
</style>
