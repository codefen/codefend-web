import { motion } from "framer-motion";
import { serviceTransition } from "../transitions/globalTransitions";

export const ServicesData = ({ data, initialVariant, hoverVariant }) => {
  return data.map((item) => (
    <motion.div
      key={item.id}
      variants={serviceTransition}
      viewport={{ once: true }}
      whileInView="visible"
      initial={initialVariant}
      whileHover={hoverVariant}
      className="item"
    >
      <p>
        <b>{item.title}</b>
        <br />
        {item.description}
      </p>
    </motion.div>
  ));
};
