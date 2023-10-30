
import { motion } from "framer-motion";
import { appearTransition, slideTransition, verticalAnimation } from "../transitions/globalTransitions";
import { TypeAnimation } from 'react-type-animation';


const Hero = () =>{

    return (
      <section className="hero">
        <div className="ss"></div>
        <div className="container">
          <div className="header">
            <motion.div 
              initial={{
                opacity:0, 
                transform:'scale(0.8)'}}
              animate={{
                opacity:1, 
                transform:'scale(1)',
                }} 
                transition={{
                  delay:0.2,
                  duration:1
                }}
              className="brand">
              <img src="../assets/images/brand.png" alt="logo" />
            </motion.div>
            <div className="menu">
              <a href="#contact" className="btn alt">
                contact
              </a>
              <a href="#" className="btn main">
                download
              </a>
            </div>
          </div>
          <div className="content">
            <>
            < motion.div initial="hidden"
                         animate="visible"
                         variants={slideTransition} 
                         className="copy">
              <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'intel meets protection',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Always On Cybersecurity Service',
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
            initial={{y:'50vh', opacity:0, scale:0.5}}             
            animate={{y:'0',
                      opacity:[0.0,1],
                      scale:1,
                      transition:{
                      duration: 0.3,
                      delay:0.3,
                    }}}
            variants={{y: '50vw', opacity:0}} 
            className="image">
              <motion.img variants={verticalAnimation} 
                          initial='initial'
                          animate='animate'
                          src="../assets/images/hacker.png" 
                          alt="hacker img" />
            </motion.div>
          </div>
          <div className="features">
            <ul>            
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
            </ul>
            <ul>            
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
            </ul>
          </div>
        </div>
        <div className="bkg-2"></div>
      </section>
    )
}

export default Hero