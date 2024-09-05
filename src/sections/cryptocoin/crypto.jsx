import css from "./crypto.module.css";

function Crypto() {
  return (
    <section className={css.cryptoSection}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.containerContent}>
            <h2>Bitcoin is welcome</h2>
            <div>
              <img
                className={css.bitCoinImg}
                loading="lazy"
                src="/images/coinred.webp"
                alt="bitcoin"
                width={120}
                height={120}
              />
              <p>
                <b>
                  for customers and our ethical hackers: we accept all major
                  cryptocurrencies including bitcoin, ethereum, and litecoin.
                </b>{" "}
                By accepting these cryptocurrencies, we are making it easier for
                our customers to do business with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crypto;
