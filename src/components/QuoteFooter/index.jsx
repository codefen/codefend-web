import css from "./quotefooter.module.scss";

export const QuoteFooter = ({ subtotal, resourceLists }) => {
  console.log({ resourceLists: JSON.stringify(resourceLists) });
  return (
    <div className={css.quoteRightBottomContainer}>
      <p>Precio anual / única vez: ${subtotal}</p>
      <p>Precio mensual / suscripción: ${subtotal / 10} mensuales</p>
      <button
        className="commonButton"
        style={{ width: "100%" }}
        disabled={subtotal === 0}
      >
        draft send proposal
      </button>
    </div>
  );
};
