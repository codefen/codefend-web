function Crypto() {
  return (
    <section className="crypto">
      <div className="container">
        <div className="coin-div">
          <h3>bitcoin is welcome</h3>

          <div className="content">
              <img
                className="coin1"
                loading="lazy"
                src="../assets/images/coinred.webp"
                alt="bitcoin"
              />
            <p>
              <b>
                <span>For dear customers, ethical hackers and business partners:</span>
				</b>
                <br />
                We accept all major cryptocurrencies, including bitcoin,
                ethereum, and litecoin. We also support #solana and #monero.
              {" "}
              By accepting these cryptocurrencies, we are making it easier for
              our customers to do business with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crypto;
