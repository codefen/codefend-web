import css from "./quoteTab.module.scss";

export const QuoteTab = ({ icon, label, activeTab, click, id }) => {
  return (
    <button
      role="tab"
      type="button"
      aria-selected={activeTab === label}
      className={`${css.tab} ${activeTab === label ? css.active : ""}`}
      onClick={click}
      id={id}
      aria-controls={`${id}-panel`}
    >
      <img src={icon} loading="lazy" decoding="async" alt={label} />
      <p className="">{label}</p>
    </button>
  );
};
