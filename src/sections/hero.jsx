
import { motion } from "framer-motion";
import { slideInTransition, fadeTransition, loop, verticalVariant } from "../transitions/globalTransitions";
import { TypeAnimation } from 'react-type-animation';


const Hero = () =>{

    return (
      <section className="hero">
        <div className="ss"></div>
        <div className="container">
          <div className="header">
            <div className="brand">
              <img src="../assets/images/brand.png" alt="logo" />
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
              <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'intel meets protection',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Always On Cybersecurity Service',
                1000,
                'Protecting Your Digital Assets Continuously.',
                1000,
                'Team of Cybersecurity Professionals.',
                1000
              ]}
              wrapper="h1"
              speed={50}
              style={{display: 'inline-block' }}
              repeat={Infinity}
            />
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
              <motion.img variants={verticalVariant} 
                          initial='initial'
                          animate='animate'
                          src="../assets/images/hacker.png" 
                          alt="hacker img" />
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