import { motion } from "framer-motion";

const Highlights = ({ t }) => {
  return (
    <section className="highlights">
      <div className="container">
        <ul>
          {t.sections.map((section, index) => (
            <li
              key={index}
              style={{
                borderRight:
                  index === t.sections.length - 1 ? "none" : undefined,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <span className="hl-number">0{index + 1}</span>
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
    </section>
  );
};

export default Highlights;
