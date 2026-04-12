import MatrixBackground from "../../components/MatrixBackground/MatrixBackground";
import { useLocales } from "../../store/useLocales";
import css from "./hero.module.css";

const HeroSoftware = () => {
  const { locale } = useLocales();
  const isEs = locale === "es";

  const features = isEs
    ? [
        { label: "SEGURIDAD A MEDIDA", desc: "Precios flexibles adaptados a tus necesidades específicas" },
        { label: "PROTECCIÓN CONTINUA", desc: "Pentesting continuo integrado en tus ciclos CI/CD" },
        { label: "REPORTES INSTANTÁNEOS", desc: "Vulnerabilidades verificadas entregadas directamente a tu bandeja" },
      ]
    : [
        { label: "TAILOR YOUR SECURITY", desc: "Flexible pricing tailored to your specific needs" },
        { label: "FULL-TIME PROTECTION", desc: "Continuous pentesting for your CI/CD cycles" },
        { label: "INSTANT REPORTING", desc: "Peer-verified issues delivered to your inbox" },
      ];

  return (
    <section className={css.hero}>
      <MatrixBackground />
      <div className={css.overlay} />

      <div className={css.inner}>
        {/* Badge */}
        <div className={css.badge}>
          <span className={css.badge_dot} />
          {isEs ? "PLATAFORMA DE SEGURIDAD" : "SECURITY PLATFORM"}
        </div>

        <h1 className={css.headline}>
          <span className={css.line_white}>{isEs ? "UNA PLATAFORMA." : "ONE PLATFORM."}</span>
          <span className={css.line_blue}>{isEs ? "COBERTURA TOTAL." : "TOTAL COVERAGE."}</span>
        </h1>

        <p className={css.subtitle}>
          {isEs
            ? "Codefend es tu solución integral para todas las necesidades de seguridad de tu empresa. Combinamos pentesting, monitoreo de superficie de ataque y reporte de vulnerabilidades en tiempo real."
            : "Codefend is your comprehensive solution for all your company's security needs. Combining pentesting, attack surface monitoring, and real-time vulnerability reporting."}
        </p>

        <div className={css.features}>
          {features.map((f, i) => (
            <div key={i} className={css.feature_item}>
              <span className={css.feature_num}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{f.label}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={css.bottom_fade} />
    </section>
  );
};

export default HeroSoftware;
