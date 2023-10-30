import { motion } from "framer-motion"

const Highlights = () => {
    return (
        <motion.section 
        initial={{
          y:'-100%'
        }}
        animate={{
          y:0
        }}
        transition={{
          duration:0.7,
          delay:0.2
        }}
        className="highlights">
        <div className="container">
          <ul>
            <li style={{ paddingLeft: "0px" }}>
               <motion.div
                initial={{
                  opacity:0,
                  x: -70,
                 }}
                 animate={{
                  opacity:1,
                  x: 0,
                  transition:{
                    duration:1.5,
                    delay:0.9,
                    type:'spring',
                    bounce:0.6
                  }
                 }}
               >
              <h2>threat intel & research</h2>
              <p>
                Codefend expertise in threat intel and research positions us as
                leaders in offensive cybersecurity. We perform meticulous data
                collection across several communities and continuous threat
                analysis, we empower our clients to anticipate adversary
                tactics.
              </p>
               </motion.div>
            </li>
            <li>
              <motion.div
                initial={{
                  opacity:0,
                  x: -70,
                 }}
                 animate={{
                  opacity:1,
                  x: 0,
                  transition:{
                    duration:1.5,
                    delay:1,
                    type:'spring',
                    bounce:0.6
                  }
                 }}
               >
              <h2>attack surface surveillance</h2>
              <p>
                Codefend considers essential to understand and effectively
                supervise your attack surface. Codefend’s expertise in attack
                surface surveillance ensures your team can detect all potential
                infrastructure vulnerabilities in a timely manner.
              </p>
               </motion.div>
            </li>
            <li style={{ paddingRight: "0px", borderRight: "none" }}>
            <motion.div
                initial={{
                  opacity:0,
                  x: -70,
                 }}
                 animate={{
                  opacity:1,
                  x: 0,
                  transition:{
                    duration:1.5,
                    delay:1.1,
                    type:'spring',
                    bounce:0.6
                  }
                 }}
               >
              <h2>continious pentest</h2>
              <p>
                Continuous pentest is crucial in a robust offensive security
                strategy. Codefend approach is based on a dynamic and permanent
                security assessment. We provide periodic and updated penetration
                tests to replicate adversary tactics.
              </p>
               </motion.div>
            </li>
          </ul>
        </div>
      </motion.section>
    )
}

export default Highlights