import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'hello world',
    },
    appbar:{
      home:'Home',
      about:'About',
    },
    heroSection:{
      title:' All your needs in one market',
      subtitle:'see all',
    }
  },
  ar: {
    message: {
      hello: 'مرحبا ايها العالم',
    },
    appbar: {
      home: 'الرئيسية',
      about: 'حول',
    },
    heroSection: {
      title: 'كل ما تحتاجه موجود',
      subtitle: 'استعراض الكل',
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
   messages,
})

export default i18n
