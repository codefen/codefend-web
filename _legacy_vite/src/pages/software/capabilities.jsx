const Capabilities = ({ t }) => {
  return (
    <section className="capabilities">
      <div className="container">
        <h2>{t.title}</h2>
        {t.sections.map((section, index) => (
          <div className="box" key={index}>
            <p className="first-p">
              <b>{section.title}:</b>
              <br />
              {section.description}
            </p>
            <div className="box-child">
              {section.items.map((item, idx) => (
                <div key={`itm-${idx}`} className="item">
                  <p>
                    <b>{item.title}</b>
                    <br />
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
