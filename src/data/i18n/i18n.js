export const AVALABLE_LOCALES = ["en", "es"];
export const LOCALES_SWITCHER = [
    {
        label: "Español",
        value: "es"
    },
    {
        label: "Ingles",
        value: "en"
    },
]
export const DEFAULT_LOCALE = "en";
export const LOCALE_ENDPOINT = (locale) => `/locales/${locale}.json`;