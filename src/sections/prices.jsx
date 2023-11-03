import { motion } from "framer-motion"

const Prices = () => {
    return (
        <section className="prices">
        <div className="background">
        <div className="title">
          <motion.h2 
            initial={{opacity:0, y:'-100px'}} 
            transition={{delay:.5, duration:1}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            >UNIQUE PENTEST & SURVEILLANCE</motion.h2>
          <motion.p 
            initial={{opacity:0}} 
            transition={{delay:1.2, duration:1}}
            viewport={{once:true}}
            whileInView={{opacity:1}}>Choose between performing o single pentest, with a duration of one month from start to finish,
            <b>recommended for small businesses and startups</b>
            or perform a permanent supervision of your systems and infrastructure with a year duration,
            <b>recommended for establishied companies with a wide range of assets</b>
          </motion.p>
        </div>
        <div className="card-contain">
          <div className="card">
            <h3><b>Small size pentest & scope</b></h3>
            <div className="price">
              <img loading="lazy" src="src/assets/images/icon4.webp" alt="thunder-icon" />
              <div>
              <h4>$3,870</h4>
              <p>
                one pentest $3.870<br />
                surveillance $38,700 per year
              </p>
              </div>
            </div>
            <ul>
              <li className="paragraph-color">- Recommended for start ups and new companies</li>
              <li>- one-shot pentest $3,870-one report</li>
              <li>- one year subscription $38,700 per year</li>
              <li>- includes, 3 weeks of pentest + 1 week report</li>
              <li className="paragraph-color">- Dedicated hacker alocation according to your needs</li>
            </ul>
            <button>evaluate now</button>
          </div>
          {/* <div className="recommend"> */}
            <div className="card" >
              <h3><b>Medium size pentest & scope</b></h3>
              <div className="price">
                <img loading="lazy" src="src/assets/images/icon6.webp" alt="reload-icon" />
                <div>

                <h4>$6,800</h4>
                <p>
                  one pentest $6.800<br />
                  surveillance $68,000 per year
                </p>
                </div>
              </div>
              <ul>
                <li className="paragraph-color">- Recommended for medium size companies.</li>
                <li>- Recommended for CI/CD</li>
                <li className="paragraph-color">- Permanent security surveillance, continuous pentest</li>
                <li>- Export security reports at any time.</li>
                <li>- Access to our information security platform.</li>
                <li className="paragraph-color">- Dedicated hacker allocation according to your needs</li>             
              </ul>
              <button>evaluate now</button>
            </div>
          {/* </div> */}
          <div className="card">
            <h3><b>Large size pentest & scope</b></h3>
            <div className="price">
              <img loading="lazy" src="src/assets/images/icon5.webp" alt="icon" />
              <div>
              <h4>$9,200</h4>
              <p>
                one pentest $9.200<br />
                surveillance $92,000 per year
              </p>
              </div>
            </div>
            <ul>
              <li>- Red team operations & attack simulation</li>
              <li className="paragraph-color">- Recommended for stablished companies.</li>             
              <li>- Recommended for CI/CD</li>             
              <li className="paragraph-color">- Permanent security surveillance, continuous pentest</li>             
              <li>- Export security reports at any time.</li>             
              <li>- Access to our information security platform.</li>             
              <li className="paragraph-color">- Dedicated hacker allocation according to your needs.</li>                                                                                 
            </ul>
           <button>evaluate now</button>
          </div>
        </div>
        </div>


        <div className="crypto">
          <div className="container">
          <div className="coin">
            <img loading="lazy" src="src/assets/images/coin.webp" alt="bitcoin" />
              <div>
                <h3>bitcoin is welcome</h3>        
                <p>
                <b><span>for customers and our ethical hackers:</span><br />
                  We accept all major cryptocurrencies, including bitcoin,
                  ethereum, and litecoin.</b> By accepting these 
                  cryptocurrencies, we are making it easier for
                  our customers to do business with us.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}
export default Prices