
import { motion } from "framer-motion";
import { slideInTransition, fadeTransition, loop } from "../transitions/globalTransitions";


const Hero = () =>{

    return (
      <section className="hero">
        <div className="container">
          <div className="header">
            <div className="brand">
              <img src="../assets/images/brand.png" alt="" />
            </div>
            <motion.div initial="hidden"
                        animate="visible" 
                        variants={slideInTransition} 
                        className="menu">
              <a href="#contact" className="btn alt">
                contact
              </a>
              <a href="#" className="btn main">
                download
              </a>
            </motion.div>
          </div>
          <div className="content">
            <>
            < motion.div initial="hidden"
                         animate="visible"
                         variants={fadeTransition} 
                         className="copy">
              <h1>intel meets protection</h1>
              <p>
                We provide <b>advanced information security services</b> to
                prevent business continuity disruption, reputational and
                monetary loss. To make this possible we employ a multifaceted
                approach that encompasses custom software and hardware,
                proactive threat monitoring, and a team of skilled experts,
                including researchers and informants.
              </p>
            </motion.div>
            </>
            <motion.div 
            initial={{y:'50vh', opacity:0}}             
            animate={{y:'0',
                      opacity:[0.0,1],
                      transition:{
                      duration: 0.6,}}}
            variants={{y: '50vw', opacity:0}} 
            className="image">
              <img src="../assets/images/hacker.png" alt="" />
            </motion.div>
          </div>
          <div className="features">
            <motion.ul 
              initial="hidden"
              animate="visible"
              variants={loop}
              transition="visible"
              className="container">            
              <li>unique tools</li>
              <li>cid spoofing</li>
              <li>SS7 interception</li>
              <li>web3 drainers</li>
              <li>web security</li>
              <li>unlimited free scans</li>
              <li>crackmapexecute</li>
              <li>impact & cobalt strike</li>
              <li>brute ratel</li>
              <li>private leaks</li>
              <li>the onion router</li>
              <li>Invisible Internet Project</li>
            </motion.ul>
          </div>
        </div>
        <div className="bkg-2"></div>
      </section>
    )
}

export default Hero