import { ourServiceLeft, ourServiceRight } from "../data"
import { motion } from "framer-motion"
import { serviceTransition } from "../transitions/globalTransitions"


export const ServicesDataLeft = () => {
        return <>
                {
                    ourServiceLeft.map((data, index) => {
                        return (<motion.div 
                                  key={index} 
                                  variants={serviceTransition} 
                                  viewport={{ once: true }} 
                                  initial='hiddenleft'  
                                  whileInView='visible' 
                                  whileHover='hoverLeft'
                                  className="item">
                                  <p>
                                    <b>{data.title}</b>
                                    <br />
                                    {data.description}
                                  </p>                
                                </motion.div>)                                          
                    })
                }
               </>   
}

export const ServicesDataRight = () => {
    return <>
            {
                ourServiceRight.map((data, index) => {
                    return (<motion.div 
                               key={index} 
                               variants={serviceTransition} 
                               viewport={{ once: true }} 
                               initial='hiddenright'  
                               whileInView='visible' 
                               whileHover='hoverRight'
                               className="item">
                               <p>
                                 <b>{data.title}</b>
                                 <br />
                                 {data.description}
                               </p>                
                             </motion.div>)                
                })
            }
           </>   
}