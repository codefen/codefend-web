import { motion } from "framer-motion";
import { slideTransition } from "../transitions/globalTransitions";
import { RenderTextBold } from "../components/RenderTextBold";
import { Link } from "react-router-dom";

const MainDiferences = ({ t, locale }) => {
  return (
    <section className="main-differences">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideTransition}
          viewport={{ once: true }}
          className="copy"
        >
          <h2>{t.title}</h2>
          <RenderTextBold text={t.intro} />
        </motion.div>
        <div className="c-2">
          <motion.div
            initial={{ y: "50vh", opacity: 0 }}
            whileInView={{
              y: "0",
              opacity: [0.0, 1],
              transition: {
                duration: 0.6,
              },
            }}
            viewport={{ once: true }}
            className="image"
          >
            <img
              src="/images/cuadro.webp"
              loading="lazy"
              alt="statistics table img"
            />
          </motion.div>
          <div className="list">
            <ul>
              {t.items.map((item, index) => (
                <motion.li
                  key={`${index}-${item.title}`}
                  className="item"
                  viewport={{ once: true }}
                  initial={{ x: 70, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 2,
                      delay: item.delay,
                      type: "spring",
                      bounce: 0.6,
                    },
                  }}
                >
                  <div>
                    <img src={item.icon} loading="lazy" decoding="async" itemProp="image" alt="icon-img" />
                  </div>
                  <p>
                    <b>{item.title}</b>
                    <br />
                    {item.description.map((desc, idx) =>
                      desc.bold ? (
                        <strong key={idx}>{desc.text}</strong>
                      ) : (
                        desc.text
                      )
                    )}
                  </p>
                </motion.li>
              ))}
            </ul>
            <div className="buttons">
              {t.buttons.map((button, index) => button?.path ? (
                <Link
                  key={`fb-${index}`}
                  className={`btn ${button.type}`}
                  to={{
                    pathname: `/${locale}/${button.path}`,
                    hash: button.hash,
                  }}
                  state={button?.action ? { [button.action]: true } : undefined}
                >
                  {button.text}
                </Link>
              ) : (
                <a
                  key={index}
                  href={button.link}
                  className={`btn ${button.type}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {button.text}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
      <div className="bkg"></div>
    </section>
  );
};

export default MainDiferences;
