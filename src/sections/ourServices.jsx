import { ServicesData } from "./ourServicesData";
import { ourServiceLeft, ourServiceRight } from "../data";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="container">
        <div className="copy">
          <h2>Our services</h2>
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
            <ServicesData
              data={ourServiceLeft}
              initialVariant="hiddenleft"
              hoverVariant="hoverLeft"
            />
          </div>
          <div className="line-container" style={{ "--line-margin-r": "39px" }}>
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0, transition: { duration: 2, delay: 0.5 } }}
              viewport={{ once: true }}
              className="line"
            ></motion.div>
          </div>
          <div className="line-container">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0, transition: { duration: 2, delay: 0.5 } }}
              viewport={{ once: true }}
              className="line"
            ></motion.div>
          </div>
          <div className="right">
            <ServicesData
              data={ourServiceRight}
              initialVariant="hiddenright"
              hoverVariant="hoverRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
