import { motion } from "framer-motion";
import img from "/images/check.svg";
import css from "./plans.module.scss";

export default function Plans({ t }) {
  return (
    <section className={css.prices}>
      <div className={css.content}>
        <div className={css.top}>
          <motion.h1
            initial={{ opacity: 0, y: "-100px" }}
            transition={{ delay: 0.3, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            {t.description.map((texts) =>
              texts.bold ? (
                <b style={{ color: texts.color }}>{texts.text}</b>
              ) : (
                texts.text
              )
            )}
          </motion.p>
        </div>
        <div className={css.slides}>
          <div className={css.items}>
            <div className={css.contain}>
              <div className={css.cardContain}>
                {t.planItems.map((plan) => (
                  <motion.div
                    initial={{ y: "-5vh", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: plan.delay,
                      ease: "linear",
                    }}
                    viewport={{ once: true }}
                    className={css.card}
                    data-text={plan.attr}
                  >
                    <h3>{plan.title}</h3>
                    <div className={css.price}>
                      <img
                        loading="lazy"
                        src="/images/icon4.webp"
                        alt="thunder-icon"
                      />
                      <div>
                        <h4>{plan.price}</h4>
                        <p>
                          {plan.subtitle}
                          <br />
                          {plan.subtitle2}
                        </p>
                      </div>
                    </div>
                    <ul>
                      {plan.items.map((item) => (
                        <li>
                          <img src={img} loading="lazy" alt="check icon" />
                          {item.bold ? <b>{item.text}</b> : item.text}
                        </li>
                      ))}
                    </ul>
                    <a
                      className="btn"
                      href="https://panel.codefend.com/auth/signup"
                      target="_blank"
                    >
                      {t.btn}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
