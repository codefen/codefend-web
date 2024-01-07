import { ServicesDataLeft, ServicesDataRight } from "./ourServicesData";
import { motion } from "framer-motion";
import { slideTransition } from "../transitions/globalTransitions";

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="container">
        <div className="copy">
          <h2>our services</h2>
          <p>
            Codefend offers cybersecurity intel, research, and security
            services, all unified in a unique platform. This platform allows you
            to monitor your assets, infrastructure and your organization's
            security, while establishing direct communication between our
            professionals and your security team. Our conventional services
            include:
          </p>
        </div>

        <div className="list">
          <div className="left">
            <ServicesDataLeft />
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0, transition: { duration: 2, delay: 0.5 } }}
              viewport={{ once: true }}
              className="line"
            ></motion.div>
          </div>
          <div className="right">
            <ServicesDataRight />
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0, transition: { duration: 2, delay: 0.5 } }}
              viewport={{ once: true }}
              className="line"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
