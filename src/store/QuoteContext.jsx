import { createContext, useCallback, useMemo, useState } from "react";
import { defaultIdentifier, initialQuotes } from "../data/quote/store";
import { validateQuote, validateSingleQuote } from "../data/quote/general";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quotes, setQuoteState] = useState(initialQuotes);
  const [identifier, setIdentifier] = useState({
    ...defaultIdentifier,
    id: crypto.randomUUID(),
  });
  const [sending, setSending] = useState(false);
  const [showSuccess, setSuccess] = useState(false);
  const [intensity, setIntensity] = useState(100);

  const toggleModal = useCallback(
    (value) => {
      setSending(value);
    },
    [setSending]
  );
  const toggleSuccess = useCallback(
    (value) => {
      setSuccess(value);
    },
    [setSuccess]
  );

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

  const addIdentifier = useCallback(
    (key, value) => setIdentifier((prev) => ({ ...prev, [key]: value })),
    [setIdentifier]
  );

  const resetQuotes = useCallback(
    () => setQuoteState(initialQuotes),
    [setQuoteState]
  );

  const adjustedPrice = useCallback(
    (totalSubtotal) => {
      const intensityPercentage = intensity - 100;
      const adjustment = (intensityPercentage / 100) * totalSubtotal;
      return totalSubtotal + adjustment;
    },
    [intensity]
  );

  return (
    <QuoteContext.Provider
      value={{
        addQuote,
        removeQuote,
        updateQuote,
        addIdentifier,
        validationQuote,
        validationSingleQuote,
        toggleModal,
        toggleSuccess,
        setIntensity,
        adjustedPrice,
        quotes,
        identifier,
        sending,
        showSuccess,
        intensity,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
