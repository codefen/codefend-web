import { useContext } from "react"
import { I18nContext } from "./i18nProvider";

const DEFAULT_LOCALE_CONTEXT = {
    t: (key) => key,
    switchLanguage: () => {},
    locale: "en",
}

export const useLocales = () => {
  const store = useContext(I18nContext);
  if (!store) return DEFAULT_LOCALE_CONTEXT;
  return store;
}