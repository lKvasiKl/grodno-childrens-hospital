import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import be from './locales/be.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    be: { translation: be },
    en: { translation: en },
    ru: { translation: ru },
  },

  lng: 'ru',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
