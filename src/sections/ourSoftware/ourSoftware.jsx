import { motion } from "framer-motion";
import { slideTransition } from "../../transitions/globalTransitions";
import css from "./ourSoftware.module.css";
import { RenderTextBold } from "../../components/RenderTextBold";
import { VulnerabilityPanelSVG } from "../../components/DifferencesIllustrations/DifferencesIllustrations";

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
          <div className={css.panelWrapper}>
            <VulnerabilityPanelSVG />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSoftware;
