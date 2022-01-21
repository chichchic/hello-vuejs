import Vue from "vue"
import VueI18n from "vue-i18n"
Vue.use(VueI18n)
const localeInfo = [
 { localeName: 'the Republic of Korea', langName: '한국어', lang: 'ko', locale: 'ko-KR' },
 { localeName: 'United Arab Emirates', langName: 'العربية', lang: 'ar', locale: 'ar-AE' },
 { localeName: 'Saudi Arabia', langName: 'العربية', lang: 'ar', locale: 'ar-SA' },
 { localeName: 'The United States of America', langName: 'English', lang: 'en', locale: 'en-US' },
 { localeName: 'The United Kingdom of Great Britain and Northern Ireland', langName: 'English', lang: 'en', locale: 'en-GB' },
 { localeName: 'Mongolia', langName: 'Монгол', lang: 'mn', locale: 'mn-MN' },
 {localeName: 'The Russian Federation', langName: 'русский', lang: 'ru', locale: 'ru-RU' },
]
Vue.prototype.$localeInfo = localeInfo;
const messagesPromises = localeInfo.map(async ({ lang }) => {
  const { default: file } = await import(`@/locales/messages/${lang}`)
  return {key: lang, file}
})
const dateTimeFormatsPromises = localeInfo.map(async ({ locale }) => {
  const { default: file } = await import(`@/locales/dateTimeFormats/${locale}`)
  return {key: locale, file}
})
const i18nConfig = [Promise.all(dateTimeFormatsPromises), Promise.all(messagesPromises)];
const i18n = Promise.all(i18nConfig).then(res => {
  const [dateTimeFormats, messages] = res;
  return new VueI18n({
    locale: 'ko',
    fallbackLocale: 'en',
    messages: messages.reduce((acc, { key, file }) => ({ ...acc, [key]: file }), {}),
    dateTimeFormats: dateTimeFormats.reduce((acc, { key, file }) => ({ ...acc, [key]: file }), {})
  })
})

export default i18n