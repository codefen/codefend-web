import { ServicesDataLeft, ServicesDataRight } from "./ourServicesData"
import { motion } from "framer-motion"
import { fadeTransition, horizontalVariant, verticalVariant  } from "../transitions/globalTransitions"

const OurServices = () => {
    return (
        <section className="our-services">
        <div className="container">
          <div className="copy">
            <h2>our services</h2>
            <p>
              Codefend offers cybersecurity intel, research, and security services, all unified in a unique platform. This platform allows you to monitor your assets, infrastructure and your organization's security, while establishing direct communication between our professionals and your security team. Our conventional services include:
            </p>
          </div>
          <motion.img 
            variants={horizontalVariant} 
            initial='initial' 
            animate='animate' 
            style={{position:'absolute', height:'100px', width:'200px'}} 
            src={require("../assets/images/fragment1.png")} 
            alt="esto-es-prueba" />
          
          <div className="list">
            <div className="left">
              <ServicesDataLeft/>
              <div className="line"></div>
            </div>
            <div className="right">
              <ServicesDataRight/>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="contact" id="contact">
        <div className="container">
          <motion.div initial="hidden"
                      whileInView="visible"
                      variants={fadeTransition}  
                      className="copy">
            <h2>contact</h2>
            <p>
              <b>business partners and alliances</b><br/>
              We invite you to get in touch with our representatives and business partners via phone or email in order to bring you the tailored assistance your business requires. Please do not attempt to harm our business teams.
            </p>
          </motion.div>
          <div className="contacts">
            <div className="item">
              <img src="../assets/images/contact1.png" loading="lazy" alt="contact" />
              <p><b>Khalid Ayed</b><br/>
              riyadh, saudi arabia <br/>
                <a href="mailto:khalid@codefend.com">khalid@codefend.com</a> <br/>
                +20 112 347 2840
              </p>
            </div>
            <div className="item">
              <img src="../assets/images/contact2.png" loading="lazy" alt="contact" />
              <p><b>Juan Maxit</b><br/>
              buenos aires <br/>
                <a href="mailto:maxit@codefend.com">maxit@codefend.com</a> <br/>
                +54 911 3650 2089
              </p>
            </div>
            <div className="item">
              <img src="../assets/images/contact3.png" loading="lazy" alt="contact" />
              <p><b>Zaki Qureshey</b><br/>
              hyderabad, india <br/>
                <a href="mailto:zaki@codefend.com">zaki@codefend.com</a> <br/>
                +91 9000 062 062
              </p>
            </div>
            <div className="item">
              <img src="../assets/images/contact4.png" loading="lazy" alt="contact" />
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

export default OurServices