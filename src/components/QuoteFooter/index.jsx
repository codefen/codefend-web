import { sendMetrics } from "../../data/quote/general";
import { useQuoteStore } from "../../store/useQuoteStore";
import css from "./quotefooter.module.scss";

export const QuoteFooter = ({ subtotal, t }) => {
  const { toggleModal, quotes, identifier } = useQuoteStore();

  const onSendProposal = (e) => {
    e.preventDefault();
    toggleModal(true);
    sendMetrics(identifier, quotes);
  };
  return (
    <div className={css.quoteRightBottomContainer}>
      <p>
        {t.priceAnnual} ${subtotal}
      </p>
      <p>
        {t.priceMonthly} ${subtotal / 10} mensuales
      </p>
      <button
        className="commonButton"
        style={{ width: "100%" }}
        disabled={subtotal === 0}
        onClick={onSendProposal}
      >
        {t.send}
      </button>
    </div>
  );
};
