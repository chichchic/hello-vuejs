import Vue from "vue";
import VueI18n from "vue-i18n";
import _ from "underscore";

import {
  extractFiles,
  keyFileReducer,
  getUserLocale,
} from "../plugins/settingUtill";
Vue.use(VueI18n);
const locales = [
  {
    localeName: "the Republic of Korea",
    langName: "한국어",
    lang: "ko",
    locale: "ko-KR",
  },
  {
    localeName: "United Arab Emirates",
    langName: "العربية",
    lang: "ar",
    locale: "ar-AE",
  },
  {
    localeName: "Saudi Arabia",
    langName: "العربية",
    lang: "ar",
    locale: "ar-SA",
  },
  {
    localeName: "The United States of America",
    langName: "English",
    lang: "en",
    locale: "en-US",
  },
  {
    localeName: "The United Kingdom of Great Britain and Northern Ireland",
    langName: "English",
    lang: "en",
    locale: "en-GB",
  },
  { localeName: "Mongolia", langName: "Монгол", lang: "mn", locale: "mn-MN" },
  {
    localeName: "The Russian Federation",
    langName: "русский",
    lang: "ru",
    locale: "ru-RU",
  },
];
Vue.prototype.$locales = locales;
const messagesPromises = extractFiles(_.pluck(locales, "lang"), "messages");
const dateTimeFormatsPromises = extractFiles(
  _.pluck(locales, "locale"),
  "dateTimeFormats"
);
const pluralPromises = extractFiles(
  _.pluck(locales, "lang"),
  "pluralizationRules"
);
const numberFormatPromises = extractFiles(
  _.pluck(locales, "locale"),
  "numberFormats"
);

const i18nConfig = [
  Promise.all(dateTimeFormatsPromises),
  Promise.all(messagesPromises),
  Promise.all(pluralPromises),
  Promise.all(numberFormatPromises),
];

//NOTE: html lang 속성 초기 설정
document.querySelector("html").lang = getUserLocale().lang;

const i18n = Promise.all(i18nConfig).then((res) => {
  const [dateTimeFormats, messages, pluralizationRules, numberFormats] = res;
  return new VueI18n({
    locale: getUserLocale().lang,
    fallbackLocale: "en",
    messages: keyFileReducer(messages),
    dateTimeFormats: keyFileReducer(dateTimeFormats),
    pluralizationRules: keyFileReducer(pluralizationRules),
    numberFormats: keyFileReducer(numberFormats),
  });
});

export default i18n;
