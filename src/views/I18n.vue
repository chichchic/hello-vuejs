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
    <section class="localization">
      <h1>localization</h1>
      <section class="control">
        <button
          :class="{ selected: locale === curLocale }"
          v-for="{ locale, localeName } in locales"
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
        <span :class="{ rtl: isArabic }" :dir="isArabic ? 'rtl' : 'ltr'"
          >{{ $d(new Date(), "Time", curLocale) }}
        </span>
      </p>
      <p class="date-time">
        DateTime:
        <span :class="{ arabic: isArabic }">
          <span :dir="isArabic ? 'rtl' : 'ltr'">
            {{ $d(new Date(), "Date", curLocale) }}
          </span>
          <span v-if="!isArabic">,&nbsp;</span>
          <span v-else>&nbsp;</span>
          <span :dir="isArabic ? 'rtl' : 'ltr'">{{
            $d(new Date(), "Time", curLocale)
          }}</span>
        </span>
      </p>
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
    locales() {
      return this.$localeInfo.reduce((acc, { locale, localeName }) => {
        acc.push({ locale, localeName });
        return acc;
      }, []);
    },
    locale() {
      return this.$i18n.locale;
    },
    isArabic() {
      return this.curLocale.slice(0, 2) === "ar";
    },
  },
  data: () => ({
    curLocale: "ko-KR",
  }),
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
  .localization {
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
  .control {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
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
  h1 {
    margin-bottom: 1rem;
  }
  p {
    color: $primary-text-color;
    font-weight: bolder;
    font-size: 2rem;
  }
}
</style>
