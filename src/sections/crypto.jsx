function Crypto() {
  return (
    <section className="crypto">
      <div className="container">
        <div className="coin-div">
          <h3>bitcoin is welcome</h3>

          <div className="content">
            <div className="img-coin">
              <img
                className="coin1"
                loading="lazy"
                src="../assets/images/coinred.webp"
                alt="bitcoin"
              />
            </div>
            <p>
              <b>
                <span>for customers and our ethical hackers:</span>
                <br />
                We accept all major cryptocurrencies, including bitcoin,
                ethereum, and litecoin.
              </b>{" "}
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
