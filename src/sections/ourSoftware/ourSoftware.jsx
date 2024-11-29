import { motion } from "framer-motion";
import { slideTransition } from "../../transitions/globalTransitions";
import css from "./ourSoftware.module.css";

const OurSoftware = () => {
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
            <h2>Easily visualize vulnerabilities & issues</h2>
            <p>
            From the vulnerabilities section, you can access a comprehensive list of all vulnerabilities and issues identified in your application to date. By clicking on each item, you will be able to view detailed information and further insights regarding each issue. This will allow you to stay informed and take the necessary steps to address and resolve potential security risks.
            </p>
          </motion.div>
          <img
            src="/images/software-img1.png"
            loading="lazy"
            alt="Codefend Software"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSoftware;
