import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocales } from "../store/useLocales";
import MatrixBackground from "../components/MatrixBackground/MatrixBackground";

const Hero = ({ t }) => {
  const { locale } = useLocales();
  const heading = t?.headings?.animated?.[0] || "";
  const descriptions = t?.description || [];
  const features = t?.features || [];

  return (
    <section className="hero" id="hero">
      {/* Matrix animated background */}
      <MatrixBackground />

      {/* Dark center overlay */}
      <div className="hero-overlay" />

      {/* Main content */}
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="copy"
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {locale === "es" ? "PLATAFORMA DE SEGURIDAD" : "SECURITY PLATFORM"}
          </div>

          <h1>{heading}</h1>

          <p>
            {descriptions.map((part, index) =>
              part.bold ? <b key={index}>{part.text}</b> : part.text
            )}
          </p>

          <div className="hero-ctas">
            <a
              className="btn main"
              href="https://api.whatsapp.com/send/?phone=5491128936430"
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === "es" ? "HABLAR CON UN EXPERTO" : "TALK TO AN EXPERT"}
            </a>
            <a
              className="btn alt"
              href="mailto:hello@codefend.com"
            >
              {t.cta}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Professional service ticker */}
      <div className="features">
        {[1, 2].map((num) => (
          <ul key={`fl-${num}`}>
            {features.map((feature, index) => (
              <li key={`f-${num}-${index}`}>
                <span className="ticker-dot" />
                {feature}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Hero;
