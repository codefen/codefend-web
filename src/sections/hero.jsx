import { motion } from "framer-motion";
import { slideTransition } from "../transitions/globalTransitions";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Hero = ({ t }) => {
  const headingAnimated = t?.headings?.animated || [];
  const descriptions = t?.description || [];
  const features = t?.features || [];
  const typeSequence = headingAnimated.reduce((acc, curr, _) => {
    acc.push(curr);
    acc.push(3000);
    return acc;
  }, []);
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideTransition}
            className="copy"
          >
            <TypeAnimation
              sequence={typeSequence}
              wrapper="h1"
              speed={70}
              style={{
                display: "inline-block",
                fontSize: "40px",
              }}
              repeat={Infinity}
            />
            <p>
              {descriptions.map((part, index) =>
                part.bold ? <b key={index}>{part.text}</b> : part.text
              )}
            </p>
            <Link className="btn" to="/calculator">
              {t.cta}
            </Link>
          </motion.div>
          <div className="image"></div>
        </div>
        <div className="features">
          {[1, 2].map((num) => (
            <ul>
              {features.map((feature, index) => (
                <li key={`${index}-${num}`}>{feature}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="bkg-2"></div>
    </section>
  );
};

export default Hero;
