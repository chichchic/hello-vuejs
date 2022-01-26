import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
const languages = {
  ko: "한국어",
  ar: "العربية",
  en: "English",
  mn: "Монгол",
  ru: "русский",
};
const locales = [
  { localeName: "the Republic of Korea", locale: "ko-KR" },
  { localeName: "United Arab Emirates", locale: "ar-AE" },
  { localeName: "Saudi Arabia", locale: "ar-SA" },
  { localeName: "The United States of America", locale: "en-US" },
  {
    localeName: "The United Kingdom of Great Britain and Northern Ireland",
    locale: "en-GB",
  },
  { localeName: "Mongolia", locale: "mn-MN" },
  { localeName: "The Russian Federation", locale: "ru-RU" },
];
Vue.prototype.$locales = locales;
Vue.prototype.$languages = languages;
const messagesPromises = Object.keys(languages).map(async ( lang ) => {
  const { default: file } = await import(`@/locales/messages/${lang}`);
  return { key: lang, file };
});
const dateTimeFormatsPromises = locales.map(async ({ locale }) => {
  const { default: file } = await import(`@/locales/dateTimeFormats/${locale}`);
  return { key: locale, file };
});
const i18nConfig = [
  Promise.all(dateTimeFormatsPromises),
  Promise.all(messagesPromises),
];
const i18n = Promise.all(i18nConfig).then((res) => {
  const [dateTimeFormats, messages] = res;
  return new VueI18n({
    locale: "ko",
    fallbackLocale: "en",
    messages: messages.reduce(
      (acc, { key, file }) => ({ ...acc, [key]: file }),
      {}
    ),
    dateTimeFormats: dateTimeFormats.reduce(
      (acc, { key, file }) => ({ ...acc, [key]: file }),
      {}
    ),
  });
});

export default i18n;
