import { useMemo } from "react";
import { calculateResourceList, calculateTotalPrice, RESOURCE_CONFIGS } from "../data/quote/general";

export const useResourceCalculations = (quotes) => {
  
    const resourceLists = useMemo(() => {
      return Object.entries(quotes).reduce((acc, [resourceType, quotes]) => ({
        ...acc,
        [resourceType]: calculateResourceList(resourceType, quotes)
      }), {});
    }, [quotes]);
  
    const subtotals = useMemo(() => {
      return Object.entries(resourceLists).reduce((acc, [resourceType, list]) => ({
        ...acc,
        [resourceType]: calculateTotalPrice(list, RESOURCE_CONFIGS[resourceType]?.pricing || {}, resourceType)
      }), {});
    }, [resourceLists]);
  
    const totalSubtotal = useMemo(() => {
      return Object.values(subtotals).reduce((sum, subtotal) => sum + subtotal, 0);
    }, [subtotals]);
  
    return {
      resourceLists,
      subtotals,
      totalSubtotal
    };
  };