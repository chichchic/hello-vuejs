<template>
  <section class="date-time">
    <h1>DateTime</h1>
    <section class="control">
      <button
        :class="{ selected: locale === curLocale }"
        v-for="{ locale: curLocale, localeName, lang } in $locales"
        :key="curLocale"
        @click="set_preference({ locale: curLocale, lang })"
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
import { mapActions, mapState } from "vuex";

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
    ...mapActions(["set_preference"]),
  },
};
</script>
<style lang="scss" scoped>
.date-time {
  .control {
    button:not(:last-child) {
      margin-right: 1rem;
    }
  }
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
</style>
