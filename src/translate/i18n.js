import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { messages } from "./languages";

i18next.use(I18nextBrowserLanguageDetector).init({
  debug: false,
  defaultNS: ["translations"],
  fallbackLng: "en",
  ns: ["translations"],
  resources: messages,
});

export { i18next };
