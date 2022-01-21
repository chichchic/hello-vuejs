import Vue from "vue"
import VueI18n from "vue-i18n"
Vue.use(VueI18n)
const localeInfo = [
 { localeName: 'the Republic of Korea', langName: '한국어', lang: 'ko', locale: 'KR' },
 { localeName: 'United Arab Emirates', langName: 'العربية', lang: 'ar', locale: 'AE' },
 { localeName: 'Saudi Arabia', langName: 'العربية', lang: 'ar', locale: 'SA' },
 { localeName: 'The United States of America', langName: 'English', lang: 'en', locale: 'US' },
 { localeName: 'The United Kingdom of Great Britain and Northern Ireland', langName: 'English', lang: 'en', locale: 'GB' },
 { localeName: 'Mongolia', langName: 'Монгол', lang: 'mn', locale: 'MN' },
 {localeName: 'The Russian Federation', langName: 'русский', lang: 'ru', locale: 'RU' },
]
Vue.prototype.$localeInfo = localeInfo;
const messagePromises = localeInfo.map(async ({ lang }) => {
  const { default: file } = await import(`@/locales/messages/${lang}`)
  return {key: lang, file}
})
const i18n = Promise.all(messagePromises).then(res => {
  return new VueI18n({
    locale: 'ko',
    fallbackLocale: 'en',
    messages: res.reduce((acc, { key, file }) => ({...acc, [key]: file}), {})
  })
})

export default i18n