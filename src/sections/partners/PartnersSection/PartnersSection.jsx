import css from "./partners.module.css";

const PartnersSection = () => (
  <section className={css.partnesSection}>
    <div className={css.wrapper}>
      <div className={css.containerContacts}>
        <article className={css.partnesCard}>
          <img
            src="/images/contact1.webp"
            loading="lazy"
            alt="contact"
          />
          <p>
            <b>Khalid Ayed</b>
            <br />
            riyadh, saudi arabia <br />
            <a href="mailto:khalid@codefend.com">khalid@codefend.com</a> <br />
            +20 112 347 2840
          </p>
        </article>
        <article className={css.partnesCard}>
          <img
            src="/images/contact3.webp"
            loading="lazy"
            alt="contact"
          />
          <p>
            <b>Zaki Qureshey</b>
            <br />
            hyderabad, india <br />
            <a href="mailto:zaki@codefend.com">zaki@codefend.com</a> <br />
            +91 9000 062 062
          </p>
        </article>
        <article className={css.partnesCard}>
          <img
            src="/images/contact4.webp"
            loading="lazy"
            alt="contact"
          />
          <p>
            <b>Almerindo Graziano</b>
            <br />
            cyprus <br />
            <a href="mailto:almerindo@codefend.com">
              almerindo@codefend.com
            </a>{" "}
            <br />
            +357 99 883 356
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default PartnersSection;
