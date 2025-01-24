import { WEB_DESCRIPTION } from "../../data/quote/web";
import css from "./quote.module.scss";
import { useQuoteStore } from "../../store/useQuoteStore";
import { useResourceCalculations } from "../../hooks/useResourceCalculations";
import { ResourceSummaryTable } from "../../components/ResourceSummaryTable";
import { QuoteFooter } from "../../components/QuoteFooter";
import { useLocales } from "../../store/useLocales";

export const QuoteLayout = ({
  children,
  id = "",
  title = "",
  description = "",
  quoteDescriptions = WEB_DESCRIPTION,
}) => {
  const { quotes, adjustedPrice } = useQuoteStore();
  const { resourceLists, subtotals, totalSubtotal } =
    useResourceCalculations(quotes);
  const { t } = useLocales();
  const tt = t("calculator.quote.layout");
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
          <h3>{tt.summary}</h3>
          <ResourceSummaryTable
            resourceLists={resourceLists}
            subtotals={subtotals}
            totalSubtotal={adjustedPrice(totalSubtotal)}
            t={tt}
          />
        </div>
        <QuoteFooter
          subtotal={adjustedPrice(totalSubtotal)}
          resourceLists={resourceLists}
          t={tt}
        />
      </div>
    </div>
  );
};
