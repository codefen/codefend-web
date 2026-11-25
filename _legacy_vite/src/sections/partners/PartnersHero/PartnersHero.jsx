import { motion } from "framer-motion";
import MatrixBackground from "../../../components/MatrixBackground/MatrixBackground";
import css from "./partnershero.module.css";

const PartnersHero = ({ t }) => (
  <section className={css.partnesHero}>
    <MatrixBackground />
    <div className="hero-overlay" />
    <div className="container">
      <motion.div
        className={css.container}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>{t.title}</h1>
        <p>{t.description}</p>
      </motion.div>
    </div>
  </section>
);

export default PartnersHero;
