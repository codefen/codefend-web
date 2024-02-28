import { motion } from "framer-motion";
import { slideTransition } from "../transitions/globalTransitions";
import { TypeAnimation } from 'react-type-animation';

import Header from "./header";


const Hero = () =>{

    return (
      <section className="hero" id="hero">
        <div className="container">
          <div className="content">
            <>
            < motion.div initial="hidden"
                         animate="visible"
                         variants={slideTransition} 
                         className="copy">
              <TypeAnimation
              sequence={[
                'intel meets protection',
                1000,
                'Attack surface surveillance',
                1000,
                'Dive deeper the darkweb.',
                1000,
                'Remove vendor risk',
                1000,
                'continuous pentest',
                1000,
                'Unveil...',
                1000,
                'Unveil your shadow IT',
                1000,
                'decentralized pentest',
                1000,
                'quieter become, able to hear'
              ]}
              wrapper="h1"
              speed={50}
              style={{
                display: 'inline-block',
                fontSize: '40px'
              }}
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
            <div 
            className="image">
            </div>
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