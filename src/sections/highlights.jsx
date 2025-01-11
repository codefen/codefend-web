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
              <h2>continuous pentest & surveillance</h2>
              <p>
              Monitorea tus activos digitales de forma permanente con nuestras suscripciones mensuales. Recibe notificaciones instantáneas de vulnerabilidades detectadas en tu correo electrónico.
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
              <h2>threat intelligence</h2>
              <p>
              Realizamos operaciones de monitoreo continuo en foros de hacking, dentro de la dark web y en redes sociales para identificar amenazas y vulnerabilidades que puedan afectar a tu organización.
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