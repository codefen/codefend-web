import { createContext, useLayoutEffect, useState } from "react";
import {
  AVALABLE_LOCALES,
  DEFAULT_LOCALE,
  LOCALE_ENDPOINT,
} from "../data/i18n/i18n";
import { useLocation, useNavigate } from "react-router-dom";

export const I18nContext = createContext();

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((prev, curr) => {
    return prev ? prev[curr] : undefined;
  }, obj);
};

export const I18nProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [locale, _] = useState(() => {
    const pathSegments = location?.pathname?.split?.("/");
    return pathSegments?.[1] ? pathSegments[1] : DEFAULT_LOCALE;
  });
  const [translations, setTranslations] = useState({});

  const loadTranslations = async (locale) => {
    setIsLoading(true);
    try {
      const response = await fetch(LOCALE_ENDPOINT(locale));
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error("Error loading translations:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    loadTranslations(locale);
  }, [locale]);

  const switchLanguage = (newLocale) => {
    const validNewLocale = AVALABLE_LOCALES.includes(newLocale)
      ? newLocale
      : DEFAULT_LOCALE;
    const pathSegments = location.pathname.split("/");
    // Remover el segmento de idioma actual si existe
    if (pathSegments[1] === "en" || pathSegments[1] === "es") {
      pathSegments.splice(1, 1);
    }
    const newPath = `/${validNewLocale}${pathSegments.join("/")}`;
    setLanguage(validNewLocale);
    navigate(newPath);
  };

  const t = (key) => {
    const value = getNestedValue(translations, key);
    return value !== undefined ? value : key;
  };

  if (isLoading) {
    return <div>Loading translations...</div>;
  }
  return (
    <I18nContext.Provider value={{ t, switchLanguage, locale }}>
      {children}
    </I18nContext.Provider>
  );
};
