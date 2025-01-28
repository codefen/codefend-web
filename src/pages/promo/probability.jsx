const Probability = () => {
    return (
            <div className="probability-contain">
                    <h2>how to estimate the value of a security flaw?</h2>
                    <div className="probability_cards">
                        <div className="probability_card_1">
                                <div className="percentage">
                                    
                                        <span>30%</span>
                                    
                                    <p>A critical vulnerability, with a cvss score between 9 and 10 could cost up to $2,000,000 usd. This represents a 30% difference between 2018 and 2019.</p>
                                </div>
                                <img src="/images/graphics.png" alt="" />
                                <span className="link-page">data source: www.zerodium.com</span>
                        </div>
                        <div className="probability_card_2">
                                <div className="item-content">
                                    <img src="/images/promo-item-1.png" alt="image-fire" />
                                    <div>
                                        <h3>Vulnerability valuation</h3>
                                        <p>Until today, there’s no approach to systematically valuate the price of a vulnerability, hence it’s common to estimate it’s value in proportion to it’s potential impact and assosiated risk.</p>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <img src="/images/promo-item-2.png" alt="image-warning" />
                                    <div>
                                        <h3>implicit risk</h3>
                                        <p>In the first instance, the potential of the vulnerability is evaluated. Naturally, the greater the implications, the more its weight and classification increases. The use of scoring systems is common.</p>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <img src="/images/promo-item-3.png" alt="image-fall" />
                                    <div>
                                        <h3>affected users</h3>
                                        <p>Once the vulnerability has been evaluated, we must also consider the number of users affected by it; a vulnerability in an application without users has no value.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <button className="btn">Analyze my business</button>
            </div>
    )
}

export default Probability;