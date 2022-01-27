<template>
  <section class="date-time">
    <h1>DateTime</h1>
    <section class="control">
      <button
        :class="{ selected: locale === curLocale }"
        v-for="{ locale, localeName } in $locales"
        @click="changeLocale(locale)"
      >
        {{ localeName }}
      </button>
    </section>
    <p>
      Date: <span>{{ $d(new Date(), "Date", curLocale) }} </span>
    </p>
    <p>
      Time:
      <span :class="{ rtl: isArabic }" :dir="attrDir"
        >{{ $d(new Date(), "Time", curLocale) }}
      </span>
    </p>
    <p class="date-time">
      DateTime:
      <span :class="{ arabic: isArabic }">
        <span :dir="attrDir">
          {{ $d(new Date(), "Date", curLocale) }}
        </span>
        <span v-if="!isArabic">,&nbsp;</span>
        <span v-else>&nbsp;</span>
        <span :dir="attrDir">{{ $d(new Date(), "Time", curLocale) }}</span>
      </span>
    </p>
  </section>
</template>
<script>
export default {
  name: "DateTime",
  computed: {
    isArabic() {
      return this.curLocale.slice(0, 2) === "ar";
    },
    attrDir() {
      return this.isArabic ? "rtl" : "ltr";
    },
  },
  data: () => ({
    curLocale: "ko-KR",
  }),
  methods: {
    changeLocale(locale) {
      this.curLocale = locale;
    },
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
