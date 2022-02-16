<template>
  <section class="date-time">
    <h1>DateTime</h1>
    <section class="control">
      <button
        :class="{ selected: locale === curLocale }"
        v-for="{ locale: curLocale, localeName } in $locales"
        :key="curLocale"
        @click="set_locale(curLocale)"
      >
        {{ localeName }}
      </button>
    </section>
    <p>
      Date: <span>{{ $d(new Date(), "Date", locale) }} </span>
    </p>
    <p>
      Time:
      <span :dir="attrDir">{{ $d(new Date(), "Time", locale) }} </span>
    </p>
    <p class="date-time">
      DateTime:
      <span :class="{ arabic: isArabic }">
        <span :dir="attrDir">
          {{ $d(new Date(), "Date", locale) }}
        </span>
        <span v-if="!isArabic">,&nbsp;</span>
        <span v-else>&nbsp;</span>
        <span :dir="attrDir">{{ $d(new Date(), "Time", locale) }}</span>
      </span>
    </p>
  </section>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "DateTime",
  computed: {
    ...mapState(["locale", "lang"]),
    isArabic() {
      return this.lang === "ar";
    },
    attrDir() {
      return this.isArabic ? "rtl" : "ltr";
    },
  },
  methods: {
    ...mapMutations(["set_locale"]),
  },
};
</script>
<style lang="scss" scoped>
.i18n {
  .dateTime {
    p {
      display: flex;
      width: 40rem;
      margin: 0 auto;
      span > span {
        display: inline-block;
      }
      span.arabic {
        display: flex;
        flex-direction: row-reverse;
      }
      span:first-child {
        margin-left: auto;
      }
    }
  }
}
</style>
