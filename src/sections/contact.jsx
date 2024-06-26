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
        </div>
      </section>
    )
}
export default Contact