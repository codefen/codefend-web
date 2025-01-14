import { WEB_DESCRIPTION } from "../../data/quote/web";
import css from "./quote.module.scss";
import { useQuoteStore } from "../../store/useQuoteStore";
import { useResourceCalculations } from "../../hooks/useResourceCalculations";
import { QuotePriceTable } from "../../components/QuotePriceTable";
import { ResourceSummaryTable } from "../../components/ResourceSummaryTable";
import { QuoteFooter } from "../../components/QuoteFooter";

export const QuoteLayout = ({
  children,
  id = "",
  title = "",
  description = "",
  quoteDescriptions = WEB_DESCRIPTION,
}) => {
  const { quotes } = useQuoteStore();
  const { resourceLists, subtotals, totalSubtotal } =
    useResourceCalculations(quotes);

  return (
    <div
      className={css.quoteLayout}
      role="tabpanel"
      aria-orientation="horizontal"
      aria-labelledby={id}
      id={`${id}-panel`}
    >
      <div className={css.quoteLeftContainer}>
        <div className={css.container}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {children}
      </div>
      <div className={css.quoteRightContainer}>
        <div>
          <h3>Order Summary</h3>
          <ResourceSummaryTable
            resourceLists={resourceLists}
            subtotals={subtotals}
            totalSubtotal={totalSubtotal}
          />
        </div>
        <QuoteFooter subtotal={totalSubtotal} resourceLists={resourceLists} />
      </div>
    </div>
  );
};
