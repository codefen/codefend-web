import { motion } from "framer-motion";
import { slideTransition } from "../../transitions/globalTransitions";
import css from "./ourSoftware.module.css";

const OurSoftware = () => {
  return (
    <section className={css.ourSoftwareSection}>
      <div className="container">
        +
        <div className={css.softwareExampleContainer}>
          <motion.div
            variants={slideTransition}
            viewport={{ once: true }}
            whileInView="visible"
            initial="hidden"
            className={css.motionContainer}
          >
            <h2>Our software</h2>
            <p>
              Codefend is your comprehensive solution for all your company's
              security needs. Our application combines a wide range of services
              designed to protect your organization from cyber threats, ensuring
              the highest level of protection for your data & infrastructure.
            </p>
          </motion.div>
          <img
            src="/images/app-light1.webp"
            loading="lazy"
            alt="Codefend Software light image"
          />
        </div>
        <div className={css.items}>
          <div className={css.item}>
            <h3>Tailor your security solution to your needs.</h3>
            <p>
              One of the key advantages of Codefend is the flexibility it offers
              in terms of price. We understand that every company has unique
              security requirements, and that's why we provide individualized
              price for each of our services. This means you can tailor your
              security solution to fit your financial plan and specific needs,
              excluding unnecessary expenses.
            </p>
          </div>
          <div className={css.item}>
            <h3>Full time protection for your cd/ci cycles.</h3>
            <p>
              Codefend delivers continuous pentest and attack surface
              surveillance. Our yearly services are conducted by our team of
              professionals, who will assess your system's vulnerabilities and
              provide you with detailed information to increase your defenses.
              Ensure that your organization remains protected around the clock,
              with real-time threat detection and response capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSoftware;
