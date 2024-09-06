const ServiceItem = ({ title, description, imgSrc, onClick, isActive }) => (
  <div className={`item${isActive ? " active" : ""}`} onClick={onClick}>
    <h3>{title}</h3>
    <p>{description}</p>
    <img src={imgSrc} alt="triangle" />
  </div>
);

export default ServiceItem;