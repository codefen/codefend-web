import css from "./partnershero.module.css";

const PartnersHero = ({ t }) => (
  <section className={css.partnesHero}>
    <div className="container">
      <div className={css.container}>
        <h1>{t.title}</h1>
        <p>{t.description}</p>
      </div>
    </div>
  </section>
);

export default PartnersHero;
