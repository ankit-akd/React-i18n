import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/english/en.json';
import  translationHN from './locales/hindi/hn.json';

const resources = {
    en:{
        translation:translationEN,
       },
hn:{
   translation: translationHN,
}
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng:"en",
    keySeparator:false,
    interpolation:{
        escapeValue:false,
    },
});

export default i18n;
