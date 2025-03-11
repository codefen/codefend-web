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
                      href="https://wa.me/5491128936430"
                      target="_blank"
                    >
                      {t.btn}
                      &nbsp;
                      &nbsp;
                      <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path></svg></span>
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
