import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

const userLang = navigator.language
const defaultLocale = userLang.substring(0, 2)

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: defaultLocale,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  })
