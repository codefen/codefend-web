import { ServicesData } from "./ourServicesData";
import { motion } from "framer-motion";

const OurServices = ({ t }) => {
  return (
    <section className="our-services">
      <div className="container">
        <div className="copy">
          <h2>{t.title}</h2>
          <p>{t.description}</p>
        </div>

        <div className="list">
          <div className="left">
            <ServicesData
              data={t.services.left}
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
              data={t.services.right}
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
