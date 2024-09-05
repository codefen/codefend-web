const PartnerAdventagesCard = ({ title, percentage, children, icon }) => (
  <article>
    {percentage ? <b className="percentage">{percentage}</b> : null}
    {icon ? <img src={icon} loading="lazy" /> : null}
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  </article>
);

export default PartnerAdventagesCard;
