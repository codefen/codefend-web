import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>remarkable features</h2>
        <div className="contain-columns">
          <div className="column">
            <div>
              <motion.h3>specialized customer support</motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <b>
                monitor your attack surface
Reveal and manage your hidden IT infrastructure
                </b>{" "}
                 with our comprehensive automated attack surface expansion. Discover and continuously update your attack surface with our integrated systems of automated and manual detection.
              </motion.p>
            </div>
            <motion.img
              // initial={{y:'20vw', opacity:0}}
              // whileInView={{y:0, opacity:1}}
              // viewport={{once:true}}
              // transition={{duration:1, delay:1.5}}
              loading="lazy"
              src="../assets/images/app-blue1.png"
              alt="image of app"
             
            />
          </div>
          <div className="column">
            <div>
              <motion.h3>uncertain about your mobile apps?</motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <b>
                Codefend offers detailed analysis of mobile applications.
                </b>{" "}
 Simply add the applications you and your team use in our application, and upon completion, we will provide you with a <b> comprehensive report on the operations the application performs with your information and its security status.</b>
              </motion.p>
            </div>
            <motion.img
              // initial={{y:'20vw', opacity:0}}
              // whileInView={{y:0, opacity:1}}
              // transition={{duration:1, delay:1.5}}
              // viewport={{once:true}}
              loading="lazy"
              src="../assets/images/app-blue2.png"
              alt="image of app"
              className="right"
            />
          </div>
        </div>
        <div className="contain-columns">
          <div className="column">
            <div>
              <motion.h3>Detailed vulnerabilties & issues</motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <b>
                Reveal and manage your hidden IT infrastructure
                </b>{" "}
 
                Our professionals at Codefend will conduct a multidisciplinary research of your systems, identifying and reporting each vulnerability individually. Following this, you will have the capability to generate a report directly from the app, ensuring you have comprehensive insights at your fingertips!
              </motion.p>
            </div>
            <motion.img
              // initial={{y:'20vw', opacity:0}}
              // whileInView={{y:0, opacity:1}}
              // viewport={{once:true}}
              // transition={{duration:1, delay:1.5}}
              loading="lazy"
              src="../assets/images/app-blue3.png"
              alt="image of app"
             
            />
          </div>
          <div className="column">
            <motion.img
              // initial={{y:'20vw', opacity:0}}
              // whileInView={{y:0, opacity:1}}
              // transition={{duration:1, delay:1.5}}
              // viewport={{once:true}}
              loading="lazy"
              src="../assets/images/app-blue4.png"
              alt="image of app"
              className="right"
            />
          </div>
        </div>
        <div className="contain-columns">
          <div className="column">
            <div>
              <motion.h3>We prioritize providing rapid and effective solutions to all our clients.</motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <b>
                We prioritize providing rapid and effective solutions to all our clients.
                </b>{" "}
                 Our software features an integrated chat system reminiscent of IRC, enhancing user experience and support efficiency.
              </motion.p>
            </div>
            <motion.img
              // initial={{y:'20vw', opacity:0}}
              // whileInView={{y:0, opacity:1}}
              // viewport={{once:true}}
              // transition={{duration:1, delay:1.5}}
              loading="lazy"
              src="../assets/images/app-blue5.png"
              alt="image of app"
             
            />
          </div>
          <div className="column">
            <motion.img
              // initial={{y:'20vw', opacity:0}}
              // whileInView={{y:0, opacity:1}}
              // transition={{duration:1, delay:1.5}}
              // viewport={{once:true}}
              loading="lazy"
              src="../assets/images/app-blue6.png"
              alt="image of app"
              className="right"
            />
          </div>
        </div>                  
      </div>
    </section>
  );
};

export default Features;
