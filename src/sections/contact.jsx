import { motion } from "framer-motion"
import { slideTransition } from "../transitions/globalTransitions"
import { useRef } from "react" 
import img from '../../public/assets/images/check.svg'

const Contact = () => {
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
      <section className="contact" id="contact">
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
      </section>
    )
}
export default Contact