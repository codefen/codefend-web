const Features = ({ t }) => {
  return (
    <section className="features">
      <div className="container">
        <div className="columned">
          {t.columned.map((feature, index) => (
            <div className="column" key={index}>
              <div>
                <h3>
                  <b>{feature.title}</b>
                </h3>
                <p>
                  <strong>{feature.description.split(":")[0]}:&nbsp;</strong>
                  {feature.description.split(":").slice(1).join(":").trim()}
                </p>
              </div>
              <img
                loading="lazy"
                decoding="async"
                src={feature.image}
                alt={feature.alt}
                className={feature.className || ""}
              />
            </div>
          ))}
        </div>
        <div className="columnota">
          {t.columnota.map((feature, index) => (
            <div className="column" key={index}>
              <div>
                <h3>
                  <b>{feature.title}</b>
                </h3>
                <p>
                  <strong>{feature.description.split(":")[0]}:&nbsp;</strong>
                  {feature.description.split(":").slice(1).join(":").trim()}
                </p>
              </div>
              <img
                loading="lazy"
                src={feature.image}
                alt={feature.alt}
                className={feature.className || ""}
              />
            </div>
          ))}
        </div>
        {t.column.map((feature, index) => (
          <div className="column" key={index}>
            <img loading="lazy" src={feature.image} alt={feature.alt} />
            <div>
              <h3>
                <b>{feature.title}</b>
              </h3>
              <p>
                <strong>{feature.description.split(":")[0]}:&nbsp;</strong>
                {feature.description.split(":").slice(1).join(":").trim()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
