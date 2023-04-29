import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'EN',
  lng: 'EN',
  resources: {
    EN: {
      translations: require('./locales/en/translations.json')
    },
    ES: {
      translations: require('./locales/es/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['EN', 'ES'];

export default i18n;
