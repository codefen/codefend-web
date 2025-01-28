import { motion } from "framer-motion";
import { slideTransition } from "../../transitions/globalTransitions";
import css from "./ourSoftware.module.css";
import { RenderTextBold } from "../../components/RenderTextBold";

const OurSoftware = ({ t }) => {
  return (
    <section className={css.ourSoftwareSection}>
      <div className="container">
        <div className={css.softwareExampleContainer}>
          <motion.div
            variants={slideTransition}
            viewport={{ once: true }}
            whileInView="visible"
            initial="hidden"
            className={css.motionContainer}
          >
            <h2>{t.title}</h2>
            <RenderTextBold text={t.description} />
          </motion.div>
          <img src={t.image.src} loading="lazy" alt={t.image.alt} decoding="async" itemProp="image" />
        </div>
      </div>
    </section>
  );
};

export default OurSoftware;
