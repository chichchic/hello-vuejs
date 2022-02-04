<template>
  <section class="l10n">
    <h1>Localization</h1>
    <section class="control">
      <button
        v-for="{ locale: curLocale, localeName } in $locales"
        :class="{ selected: curLocale === locale }"
        :key="curLocale"
        @click="set_locale(curLocale)"
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
import { mapMutations, mapState } from "vuex";

export default {
  data: () => ({
    amount: 1,
    unitPrice: 3000,
  }),
  computed: {
    ...mapState(["locale"]),
    isArabic() {
      return this.locale.slice(0, 2) === "ar";
    },
    attrDir() {
      return this.isArabic ? "rtl" : "ltr";
    },
    currencySymbol() {
      return extractNonNumber(this.$n(null, "currency", this.locale))[0];
    },
  },
  methods: {
    ...mapMutations(["set_lang", "set_locale"]),
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
