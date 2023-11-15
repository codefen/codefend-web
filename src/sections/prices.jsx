import { motion } from "framer-motion"
import { slideTransition } from "../transitions/globalTransitions"
import { useState } from "react"

const Prices = () => {
    return (
      <section className="prices">
        <div className="background">
        <div className="title">
          <motion.h2 
            initial={{opacity:0, y:'-100px'}} 
            transition={{delay:.3, duration:1}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            >UNIQUE PENTEST & SURVEILLANCE</motion.h2>
          <motion.p 
            initial={{opacity:0}} 
            transition={{delay:1, duration:1}}
            viewport={{once:true}}
            whileInView={{opacity:1}}>Choose between performing o single pentest, with a duration of one month from start to finish,
            <b>recommended for small businesses and startups</b>
            or perform a permanent supervision of your systems and infrastructure with a year duration,
            <b>recommended for establishied companies with a wide range of.. assets</b>
          </motion.p>
        </div>
        <motion.div 
          initial={{scale:.9, opacity:0}}
          transition={{duration:1, delay:1}}
          whileInView={{scale:1, opacity:1}}
          viewport={{once:true}}
          className="card-contain">
          
          <div className="card">
            <h3><b>Small business</b></h3>
            <div className="price">
              <img loading="lazy" src='../assets/images/icon4.webp' alt="thunder-icon" />
              <div>
              <h4>$1,500</h4>
              <p>
                4 weeks:$1,500/monthly billed<br />
                12 months:$15,000/anually billed
              </p>
              </div>
            </div>
            <ul>
              <li className="paragraph-color">- Recommended for start ups and new companies</li>
              <li>- one-shot pentest $1,500-one report</li>
              <li>- one year subscription $38,700 per year</li>
              <li>- includes, 3 weeks of pentest + 1 week report</li>
              <li className="paragraph-color">- Dedicated hacker alocation according to your needs</li>
            </ul>
            <button>evaluate now</button>
          </div>
                   
          <div className="card" >
              <h3><b>Medium size</b></h3>
              <div className="price">
                <img loading="lazy" src='../assets/images/icon6.webp' alt="reload-icon" />
                <div>

                <h4>$4,500</h4>
                <p>
                  4 weeks:$4,500/monthly billed<br />
                  12 months:$45,000/anually billed
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
            
          <div className="card">
            <h3><b>Full service</b></h3>
            <div className="price">
              <img loading="lazy" src='../assets/images/icon5.webp' alt="icon" />
              <div>
              <h4>$13,500</h4>
              <p>
                4 weeks:$13,500/monthly billed<br />
                12 months:$135,000/anually billed
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
          
        </motion.div>
        </div>

        <motion.div 
          initial={{x:'-98vw'}}
          whileInView={{x:0}}
          transition={{delay:.5, duration:1.5}}
          viewport={{once:true}}
          className="crypto">
          <div className="container">
          <div className="coin">
            <motion.div
              //initial={false}
              animate={{ rotateY:740 }}
              transition={{        
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 7,  
              }}
              className="img-coin" >
              <img className="coin1"  loading="lazy" src="../assets/images/coin.webp" alt="bitcoin" />
              <img className="coin2"  loading="lazy" src="../assets/images/coinred.webp" alt="bitcoin red" />
            </motion.div>

          <div>
              <motion.h3
              variants={slideTransition}
              initial='hidden'
              whileInView='visible'
              viewport={{once:true}}
              >bitcoin is welcome</motion.h3>        
              <motion.p
              initial={{x:'20vw', opacity:0}}
              whileInView={{x:0, opacity:1}}
              transition={{delay:1, duration:1}}
              viewport={{once:true}}>
              <b><span>for customers and our ethical hackers:</span><br />
                We accept all major cryptocurrencies, including bitcoin,
                ethereum, and litecoin.</b> By accepting these 
                cryptocurrencies, we are making it easier for
                our customers to do business with us.</motion.p>
            </div>
            </div>
          </div>
        </motion.div>
    </section>
    )
}
export default Prices