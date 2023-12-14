import { motion } from "framer-motion"
import { slideTransition } from "../transitions/globalTransitions"
import { useRef } from "react" 
import img from '../../public/assets/images/check.svg'

const Prices = () => {
    const slide = useRef(null)

    function handleSlide({target}){
      const {current} = slide
      console.log(event.target.className)
      if(target.className === "monthly"){
        current.style.transform = `translate(0vw)`;
      } else{
        current.style.transform = `translate(-100vw)`;
        
      }
      
    }

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
          <div className="buttons">
            <button className="monthly" onClick={handleSlide}>Monthly</button>
            <button className="anually" onClick={handleSlide}>Anually</button>
          </div>
          <div className="slide">
            <div ref={slide} className="ddd">
              <div 
                // initial={{scale:.9, opacity:0}}
                // transition={{duration:1, delay:1}}
                // whileInView={{scale:1, opacity:1}}
                // viewport={{once:true}}
                className="contain">
                {/* <h4>monthly</h4> */}
                <hr />              
                <div className="card-contain">
                  <motion.div
                  initial={{y:'-5vh', opacity:0}}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.5, delay:0.5, ease:'linear'}}
                  viewport={{once:true}} 
                  className="card">
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
                      <li><img src={img} alt="check icon" /> Platform access </li>
                      <li><img src={img} alt="check icon" />	Automated scan </li>
                      <li><img src={img} alt="check icon" /> Custom scan </li>
                      <li><img src={img} alt="check icon" /> Basic Manual testing ✓ </li>
                      <li><img src={img} alt="check icon" /> 	Frecuency: one single scan  </li>
                      <li><img src={img} alt="check icon" /> Deliverables: 1 single report  </li>
                      <li><img src={img} alt="check icon" /> Service duration: 4 weeks  </li>
                      <li><img src={img} alt="check icon" /> Scope / attack surface: small  </li>
                    </ul>
                    <button>evaluate now</button>
                  </motion.div>
                          
                  <motion.div 
                  initial={{y:'-5vh', opacity:0}}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.5, delay:0.7, ease:'linear'}}
                  viewport={{once:true}} 
                  className="card" >
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
                        <li><img src={img} alt="check icon" /> Platform access </li>
                        <li><img src={img} alt="check icon" />	Automated scan </li>
                        <li><img src={img} alt="check icon" /> Custom scan </li>
                        <li className="paragraph-color"><img src={img} alt="check icon" /> 	Advanced Manual testing ✓	 </li>
                        <li><img src={img} alt="check icon" /> Frecuency: one single scan  </li>
                        <li><img src={img} alt="check icon" /> Deliverables: 1 single report  </li>
                        <li><img src={img} alt="check icon" /> Service duration: 4 weeks  </li>
                        <li className="paragraph-color"><img src={img} alt="check icon" /> Scope / attack surface: medium ✓	</li>                      
                      </ul>
                      <button>evaluate now</button>
                  </motion.div>
                    
                  <motion.div 
                  initial={{y:'-5vh', opacity:0}}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.5, delay:1, ease:'linear'}}
                  viewport={{once:true}} 
                  className="card">
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
                      <li><img src={img} alt="check icon" /> Platform access </li>
                      <li><img src={img} alt="check icon" />	Automated scan </li>
                      <li><img src={img} alt="check icon" /> Custom scan </li>
                      <li className="paragraph-color"><img src={img} alt="check icon" /> 	Specialized Manual testing ✓✓	 </li>
                      <li><img src={img} alt="check icon" /> Frecuency: one single scan  </li>
                      <li><img src={img} alt="check icon" /> Deliverables: 1 single report  </li>
                      <li><img src={img} alt="check icon" /> Service duration: 4 weeks  </li>
                      <li className="paragraph-color"><img src={img} alt="check icon" /> Scope / attack surface: large ✓✓	</li>                                                                              
                    </ul>
                  <button>evaluate now</button>
                  </motion.div>
                </div>             
              </div>

              <div
                // initial={{scale:.9, opacity:0}}
                // transition={{duration:1, delay:1}}
                // whileInView={{scale:1, opacity:1}}
                // viewport={{once:true}}
                className="contain">
                {/* <h4>anually</h4> */}
                <hr />

                <div className="card-contain">
                  <motion.div 
                  initial={{y:'-5vh', opacity:0}}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.5, delay:0.5, ease:'linear'}}
                  viewport={{once:true}} 
                  className="card">
                    <h3><b>Small business</b></h3>
                    <div className="price">
                      <img loading="lazy" src='../assets/images/icon4.webp' alt="thunder-icon" />
                      <div>
                      <h4>$15,000</h4>
                      <p>
                        4 weeks:$1,500/monthly billed<br />
                        12 months:$15,000/anually billed
                      </p>
                      </div>
                    </div>
                    <ul>
                      <li><img src={img} alt="check icon" /> Platform access </li>
                      <li><img src={img} alt="check icon" />	Automated scan </li>
                      <li><img src={img} alt="check icon" /> Custom scan </li>
                      <li><img src={img} alt="check icon" /> Basic Manual testing ✓ </li>
                      <li><img src={img} alt="check icon" /> 	Frecuency: one single scan per month  </li>
                      <li><img src={img} alt="check icon" /> Deliverables: one single report per month  </li>
                      <li><img src={img} alt="check icon" /> Service duration: 12 months </li>
                      <li><img src={img} alt="check icon" /> Scope / attack surface: small </li> 
                    </ul>
                    <button>evaluate now</button>
                  </motion.div>
                          
                  <motion.div 
                  initial={{y:'-5vh', opacity:0}}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.5, delay:0.7, ease:'linear'}}
                  viewport={{once:true}} 
                  className="card" >
                      <h3><b>Medium size</b></h3>
                      <div className="price">
                        <img loading="lazy" src='../assets/images/icon6.webp' alt="reload-icon" />
                        <div>

                        <h4>$45,000</h4>
                        <p>
                          4 weeks:$4,500/monthly billed<br />
                          12 months:$45,000/anually billed
                        </p>
                        </div>
                      </div>
                      <ul>
                        <li><img src={img} alt="check icon" /> Platform access </li>
                        <li><img src={img} alt="check icon" />	Automated scan </li>
                        <li><img src={img} alt="check icon" /> Custom scan </li>
                        <li className="paragraph-color"><img src={img} alt="check icon" /> Advanced Manual testing ✓ </li>
                        <li><img src={img} alt="check icon" /> 	Frecuency: one single scan per month  </li>
                        <li><img src={img} alt="check icon" /> Deliverables: one single report per month  </li>
                        <li><img src={img} alt="check icon" /> Service duration: 12 months </li>
                        <li className="paragraph-color"><img src={img} alt="check icon" /> Scope / attack surface: medium ✓ </li>             
                      </ul>
                      <button>evaluate now</button>
                  </motion.div>
                    
                  <motion.div
                  initial={{y:'-5vh', opacity:0}}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.5, delay:1, ease:'linear'}}
                  viewport={{once:true}}  
                  className="card">
                    <h3><b>Full service</b></h3>
                    <div className="price">
                      <img loading="lazy" src='../assets/images/icon5.webp' alt="icon" />
                      <div>
                      <h4>$135,000</h4>
                      <p>
                        4 weeks:$13,500/monthly billed<br />
                        12 months:$135,000/anually billed
                      </p>
                      </div>
                    </div>
                    <ul>
                      <li><img src={img} alt="check icon" /> Platform access </li>
                      <li><img src={img} alt="check icon" />	Automated scan </li>
                      <li><img src={img} alt="check icon" /> Custom scan </li>
                      <li className="paragraph-color"><img src={img} alt="check icon" /> Specialized Manual testing ✓✓ </li>
                      <li><img src={img} alt="check icon" /> 	Frecuency: one single scan per month  </li>
                      <li><img src={img} alt="check icon" /> Deliverables: one single report per month  </li>
                      <li><img src={img} alt="check icon" /> Service duration: 12 months </li>
                      <li className="paragraph-color"><img src={img} alt="check icon" /> Scope / attack surface: large ✓✓ </li>                                                                                  
                    </ul>
                  <button>evaluate now</button>
                  </motion.div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="contact" id="contact">
          <div className="container">
            <motion.div initial="hidden"
                        whileInView="visible"
                        variants={slideTransition}  
                        className="copy">
              <h2>contact</h2>
              <p>
                <b>business partners and alliances</b><br/>
                We invite you to get in touch with our representatives and business partners via phone or email in order to bring you the tailored assistance your business requires. Please do not attempt to harm our business teams.
              </p>
            </motion.div>
            <div className="contacts">
              <div className="item">
                <img src="../assets/images/contact1.webp" loading="lazy" alt="contact" />
                <p><b>Khalid Ayed</b><br/>
                riyadh, saudi arabia <br/>
                  <a href="mailto:khalid@codefend.com">khalid@codefend.com</a> <br/>
                  +20 112 347 2840
                </p>
              </div>
              <div className="item">
                <img src="../assets/images/contact3.webp" loading="lazy" alt="contact" />
                <p><b>Zaki Qureshey</b><br/>
                hyderabad, india <br/>
                  <a href="mailto:zaki@codefend.com">zaki@codefend.com</a> <br/>
                  +91 9000 062 062
                </p>
              </div>
              <div className="item">
                <img src="../assets/images/contact4.webp" loading="lazy" alt="contact" />
                <p><b>Almerindo Graziano</b><br/>
                cyprus <br/>
                  <a href="mailto:almerindo@codefend.com">almerindo@codefend.com</a> <br/>
                  +357 99 883 356
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Prices