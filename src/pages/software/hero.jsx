import { motion } from "framer-motion";
import { slideTransition } from "../../transitions/globalTransitions";

const HeroSoftware = () => {
  return (
    <section className="our-software">
      <img
        style={{
          position: "absolute",
          zIndex: "-1",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
        loading="lazy"
        src="/images/bkg-soft.jpg"
        alt="background"
      />
      <div className="container">
        <motion.div
          variants={slideTransition}
          viewport={{ once: true }}
          whileInView="visible"
          initial="hidden"
          className="copy"
        >
          <h2>Our software</h2>
          <p>
            Codefend is your comprehensive solution for all your company's
            security needs. Our application combines a wide range of services
            designed to protect your organization from cyber threats, ensuring
            the highest level of protection for your data & infrastructure.
          </p>
        </motion.div>
        +
        <div className="image">
          <img src="/images/sleek-1.png" loading="lazy" alt="statistics img" />
        </div>
        <div className="items">
          <div className="item">
            <p>
              <b>tailor your security solution to your needs.</b>
              <br />
              One of the key advantages of Codefend is the flexibility it offers
              in terms of price. We understand that every company has unique
              security requirements, and that's why we provide individualized
              price for each of our services. This means you can tailor your
              security solution to fit your financial plan and specific needs,
              excluding unnecessary expenses.
            </p>
          </div>
          <div className="item">
            <p>
              <b>full time protection for your cd/ci cycles.</b>
              <br />
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

export default HeroSoftware;
