import { createContext, useCallback, useState } from "react";
import { defaultIdentifier, initialQuotes } from "../data/quote/store";
import { validateQuote, validateSingleQuote } from "../data/quote/general";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quotes, setQuoteState] = useState(initialQuotes);
  const [identifier, setIdentifier] = useState({
    ...defaultIdentifier,
    id: crypto.randomUUID(),
  });

  const validationQuote = useCallback(
    (type) => {
      const validatedquote = validateQuote(type, quotes[type]);

      setQuoteState((prev) => ({
        ...prev,
        [type]: prev[type] ? validatedquote : [],
      }));
    },
    [quotes]
  );

  const validationSingleQuote = useCallback(
    (type, index) => {
      const validatedquote = validateSingleQuote(type, quotes[type], index);

      setQuoteState((prev) => ({
        ...prev,
        [type]: prev[type] ? validatedquote : [],
      }));
    },
    [quotes]
  );

  const addQuote = useCallback(
    (type, quote) => {
      setQuoteState((prev) => ({
        ...prev,
        [type]: prev[type] ? [...prev[type], quote] : [quote],
      }));
    },
    [setQuoteState]
  );

  const removeQuote = useCallback(
    (type, index) => {
      setQuoteState((prev) => ({
        ...prev,
        [type]: prev[type].filter((_, i) => i !== index),
      }));
    },
    [setQuoteState]
  );

  const updateQuote = useCallback(
    (type, index, field, value) => {
      setQuoteState((prev) => ({
        ...prev,
        [type]: prev[type]
          ? prev[type].map((quote, i) =>
              i === index ? { ...quote, [field]: value } : quote
            )
          : [],
      }));
    },
    [setQuoteState]
  );

  const addEmail = useCallback(
    (email) => {
      setIdentifier((prev) => ({ ...prev, email }));
    },
    [setIdentifier]
  );

  return (
    <QuoteContext.Provider
      value={{
        addQuote,
        removeQuote,
        updateQuote,
        addEmail,
        validationQuote,
        validationSingleQuote,
        quotes,
        identifier,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
