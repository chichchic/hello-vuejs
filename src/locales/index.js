import Vue from "vue";
import VueI18n from "vue-i18n";

import { extractFiles, keyFileReducer } from "../plugins/settingUtill";
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

const messagesPromises = extractFiles(Object.keys(languages), "messages");
const dateTimeFormatsPromises = extractFiles(
  locales.map((v) => v.locale),
  "dateTimeFormats"
);
const pluralPromises = extractFiles(
  Object.keys(languages),
  "pluralizationRules"
);
const numberFormatPromises = extractFiles(
  locales.map((v) => v.locale),
  "numberFormats"
);

const i18nConfig = [
  Promise.all(dateTimeFormatsPromises),
  Promise.all(messagesPromises),
  Promise.all(pluralPromises),
  Promise.all(numberFormatPromises),
];
const i18n = Promise.all(i18nConfig).then((res) => {
  const [dateTimeFormats, messages, pluralizationRules, numberFormats] = res;
  return new VueI18n({
    locale: "ko",
    fallbackLocale: "en",
    messages: keyFileReducer(messages),
    dateTimeFormats: keyFileReducer(dateTimeFormats),
    pluralizationRules: keyFileReducer(pluralizationRules),
    numberFormats: keyFileReducer(numberFormats),
  });
});

export default i18n;
