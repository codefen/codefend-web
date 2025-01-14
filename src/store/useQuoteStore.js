import { useContext } from "react"
import { QuoteContext } from "./QuoteContext";
import { initialQuotes } from "../data/quote/store";


export const useQuoteStore = () => {
  const store = useContext(QuoteContext);

  if (!store) return { quotes: initialQuotes};

  return store;
}