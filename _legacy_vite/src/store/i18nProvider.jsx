import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  AVALABLE_LOCALES,
  DEFAULT_LOCALE,
  LOCALE_ENDPOINT,
} from "../data/i18n/i18n";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const I18nContext = createContext();

const getNestedValue = (obj, path) =>
  path.split(".").reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);

export const I18nProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extraemos el locale inicial del pathname
  const initialLocale = location.pathname.split("/")[1] || DEFAULT_LOCALE;
  const [locale, setLocale] = useState(initialLocale);
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const loadTranslations = useCallback(async (currentLocale) => {
    setIsLoading(true);
    try {
      const response = await fetch(LOCALE_ENDPOINT(currentLocale));
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error("Error loading translations:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTranslations(locale);
  }, [locale, loadTranslations]);

  const switchLanguage = useCallback(
    (newLocale) => {
      const validLocale = AVALABLE_LOCALES.includes(newLocale)
        ? newLocale
        : DEFAULT_LOCALE;

      const segments = location.pathname.split("/");
      // Si el primer segmento es un locale válido, lo removemos
      if (AVALABLE_LOCALES.includes(segments[1])) {
        segments.splice(1, 1);
      }
      const newPath = `/${validLocale}${segments.join("/")}`;
      setLocale(validLocale);
      navigate(newPath);
    },
    [location.pathname, navigate]
  );

  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations, key);
      return value !== undefined ? value : key;
    },
    [translations]
  );
  const contextValue = useMemo(
    () => ({ t, switchLanguage, locale }),
    [t, switchLanguage, locale]
  );

  if (isLoading) {
    return <div>Loading translations...</div>;
  }
  return (
    <I18nContext.Provider value={contextValue}>
      <AnimatePresence>{children}</AnimatePresence>
    </I18nContext.Provider>
  );
};
