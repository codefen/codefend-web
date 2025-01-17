import { motion } from "framer-motion";
import { slideTransition } from "../transitions/globalTransitions";
import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

const Contact = () => {
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = contactRef.current;
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section ref={contactRef} className="contact" id="contact">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideTransition}
          className="copy"
        >
          <h2>Contact</h2>
          <p>
            <b>business partners and alliances</b>
            <br />
            We invite you to get in touch with our representatives and business
            partners via phone or email in order to bring you the tailored
            assistance your business requires. Please do not attempt to harm our
            business teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
