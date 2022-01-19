import Vue from "vue"
import VueI18n from "vue-i18n"
Vue.use(VueI18n)
const importAll = r => r.keys().map(key => key.slice(2).replace('.json', '').split('/'))
const pathes = importAll(require.context('@/locales', true, /\.json$/))
const generateKey = path => path[0].toLowerCase()
const messagePromises = pathes.map(async path => {
  const key = generateKey(path)
  const { default: file } = await import(`@/locales/${path.join('/')}`)
  return { key, file }
})
const i18n = Promise.all(messagePromises).then(res => {
  return new VueI18n({
    locale: 'ko',
    fallbackLocale: 'en',
    messages: res.reduce((acc, { key, file }) => ({...acc, [key]: file}), {})
  })
})

export default i18n