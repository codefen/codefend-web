import { Link } from "react-router-dom";
import { useLocales } from "../../store/useLocales";
import MatrixBackground from "../../components/MatrixBackground/MatrixBackground";
import css from "./newHero.module.css";

const NewHero = ({ t }) => {
  const { locale } = useLocales();

  return (
    <section className={css.hero}>
      {/* Animated matrix background */}
      <MatrixBackground />

      {/* Dark gradient overlay so text stays readable */}
      <div className={css.overlay} />

      {/* Content */}
      <div className={css.inner}>

        {/* Badge */}
        <div className={css.badge}>
          <span className={css.badge_dot} />
          {locale === "es"
            ? "PLATAFORMA DE SEGURIDAD CONTINUA"
            : "CONTINUOUS SECURITY PLATFORM"}
        </div>

        {/* Headline — up to 3 lines from translation */}
        <h1 className={css.headline}>
          <span className={css.line_white}>{t.line1}</span>
          {t.line2 && <span className={css.line_blue}>{t.line2}</span>}
          {t.line3 && <span className={css.line_white}>{t.line3}</span>}
        </h1>

        {/* Subtitle */}
        <p className={css.subtitle}>{t.description}</p>

        {/* CTAs */}
        <div className={css.ctas}>
          <a
            href="https://api.whatsapp.com/send/?phone=5491128936430"
            target="_blank"
            rel="noopener noreferrer"
            className={css.cta_primary}
          >
            {locale === "es" ? "RESERVAR UNA LLAMADA" : "BOOK A CALL"}
          </a>
          <a
            href="mailto:hello@codefend.com"
            className={css.cta_secondary}
          >
            {locale === "es" ? "Contactar →" : "Contact us →"}
          </a>
        </div>

        {/* Stats row */}
        {t.stats && t.stats.length > 0 && (
          <div className={css.stats}>
            {t.stats.map((s, i) => (
              <div key={i} className={css.stat}>
                <span className={css.stat_value}>{s.value}</span>
                <span className={css.stat_label}>{s.label}</span>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Bottom fade */}
      <div className={css.bottom_fade} />
    </section>
  );
};

export default NewHero;
