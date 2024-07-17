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
              <h2>1. create your account</h2>
              <p>
              Create an account for your company—it's very easy; we just need some basic information!
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
              <h2>2. add your resources</h2>
              <p>
              Follow the step-by-step process to add all the resources you want to analyze.
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
              <h2>3. get your pentest</h2>
              <p>
               Choose the plan that best fits your needs and start the pentest! You'll receive instant notifications of detected vulnerabilities directly in your inbox.
              </p>
               </motion.div>
            </li>
          </ul>
        </div>
      </motion.section>
    )
}

export default Highlights