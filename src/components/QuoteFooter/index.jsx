import { sendMetrics } from "../../data/quote/general";
import { useQuoteStore } from "../../store/useQuoteStore";
import css from "./quotefooter.module.scss";

export const QuoteFooter = ({ subtotal }) => {
  const { toggleModal, quotes, identifier } = useQuoteStore();

  const onSendProposal = (e) => {
    e.preventDefault();
    toggleModal(true);
    sendMetrics(identifier, quotes);
  };
  return (
    <div className={css.quoteRightBottomContainer}>
      <p>Precio anual / única vez: ${subtotal}</p>
      <p>Precio mensual / suscripción: ${subtotal / 10} mensuales</p>
      <button
        className="commonButton"
        style={{ width: "100%" }}
        disabled={subtotal === 0}
        onClick={onSendProposal}
      >
        draft send proposal
      </button>
    </div>
  );
};
