import { motion } from "framer-motion";

const Highlights = ({ t }) => {
  return (
    <motion.section
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      className="highlights"
    >
      <div className="container">
        <ul>
          {t.sections.map((section, index) => (
            <li
              key={index}
              style={{
                paddingLeft: section.paddingLeft ? "0px" : undefined,
                borderRight:
                  index === t.sections.length - 1 ? "none" : undefined,
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: -70,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.5,
                    delay: section.delay,
                    type: "spring",
                    bounce: 0.6,
                  },
                }}
              >
                <h2>{section.title}</h2>
                <p>
                  {section.description.map((part, idx) =>
                    part.bold ? <b key={idx}>{part.text}</b> : part.text
                  )}
                </p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Highlights;
