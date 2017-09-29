import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

Vue.use(VueI18n)

const locale = 'en-US' // default locale

const messages = {
  locale,
  messages: {
    'zh-CN': {
      ...zhLocale, // 或者用 Object.assign({ message: '你好' }, zhLocale)
      ...zhCN
    },
    'en-US': {
      ...enLocale, // 或者用 Object.assign({ message: 'hello' }, enLocale)
      ...enUS
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n(messages)

export default i18n