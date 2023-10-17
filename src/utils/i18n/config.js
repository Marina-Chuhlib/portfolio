import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: localStorage.getItem("language") || "en",
  resources: {
    en: {
      translations: require("./locales/en/translations.json"),
    },
    ua: {
      translations: require("./locales/ua/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "ua"];

export default i18n;
