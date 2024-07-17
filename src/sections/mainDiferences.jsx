import { motion } from "framer-motion";
import { slideTransition } from "../transitions/globalTransitions";

const MainDiferences = () => {
    return (
        <section className="main-differences">
        <div className="container">
          <motion.div initial="hidden"
                      whileInView="visible"
                      variants={slideTransition} 
                      viewport={{ once: true }}
                      className="copy">
            <h2>main differences</h2>
            <p>
              Codefend serves all its clients via a web application. From this platform, <strong>we establish secure &
              encrypted communications with your company's staff</strong>. Codefend
              conducts systematic supervision of your infrastructure, employing
              diverse techniques and private information providers.
            </p>
          </motion.div>
          <div className="c-2">
            <motion.div initial={{y:'50vh', opacity:0}}             
                        whileInView={{y:'0',
                            opacity:[0.0,1],
                            transition:{
                            duration: 0.6,}}}
                        viewport={{ once: true }} 
                        className="image">
              <img src="../assets/images/cuadro.webp" loading="lazy" alt="statistics table img" />
            </motion.div>
            <div className="list">
              <ul>
                <motion.li 
                  viewport={{ once: true }} 
                  initial={{x:70, opacity:0}}  
                  whileInView={{
                    x:0,
                    opacity:1,
                    transition:{
                      duration:2,
                      delay:0.7,
                      type:'spring',
                      bounce:0.6
                    }
                  }} 
                  className="item">
                  <div>                  
                    <img src="../assets/images/icon1.webp" loading="lazy" alt="icon-img" />
                  </div>
                  <p>
                    <b>our <span title="Attack Surface Management">ASM</span> offers on-demand pentesting</b>
                    <br />
                    We believe information security should be continuous. Users can request pentesting whenever needed—whether it's for a new webpage, a new section, or a new mobile app. Vulnerabilities are promptly reported on our platform.
                  </p>
                </motion.li>
                <motion.li 
                  viewport={{ once: true }} 
                  initial={{x:70, opacity:0}}  
                  whileInView={{
                    x:0,
                    opacity:1,
                    transition:{
                      duration:2,
                      delay:0.8,
                      type:'spring',
                      bounce:0.6
                    }
                  }}  
                  className="item">
                  <div>
                  <img src="../assets/images/icon2.webp" loading="lazy" alt="icon-img" />
                  </div>
                  <p>
                    <b>issues communicated quickly</b>
                    <br />
                    Traditional security companies run scans once a year. With Codefend, you can see bugs and issues as soon as the pentester finds them. Our system delivers daily scans and immediate notifications, allowing you to address issues as they appear.
                  </p>
                </motion.li>
                <motion.li 
                  viewport={{ once: true }} 
                  initial={{x:70, opacity:0}}  
                  whileInView={{
                    x:0,
                    opacity:1,
                    transition:{
                      duration:2,
                      delay:0.9,
                      type:'spring',
                      bounce:0.6
                    }
                  }}  
                  className="item">
                  <div>
                  <img src="../assets/images/icon3.webp" loading="lazy" alt="icon-img" />
                  </div>
                  <p>
                    <b>deeply connected with real hackers</b>
                    <br />
                    Codefend isn't your typical cybersecurity firm. Beyond standard compliance reports for your web applications, we gather insights from various private communities where true hackers operate. This gives Codefend distinct edge over other security companies relying on conventional tools.
                  </p>
                </motion.li>
              </ul>
              <div className="buttons">
                <a href="#contact" className="btn alt">
                  contact
                </a>
                <a href="https://panel.codefend.com/auth/signup" target="_blank" className="btn main">
                  start now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bkg"></div>
      </section>
    )
}

export default MainDiferences