import { useEffect, useRef, useState } from "react"
import { members } from "../data"
import { motion } from "framer-motion"
import CardMembers from "../components/card-members"

const Members = () => {
    const carousel = useRef(null)
    const [screen, setScreen] = useState(0)
    const [showCarosel, setShowCarousel] = useState(false)
    const [width, setWidth] = useState(0)
    
    const handleResize=()=>{
        setScreen(window.innerWidth)
    }

    useEffect(()=>{
        if(screen <= 820){
            setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth)
            setShowCarousel(true)
        } else {
            setShowCarousel(false)
        }
        window.addEventListener('resize', handleResize)
    },[width,screen])


    return (
        <section className="members">
            <div className="container">
                <h1>meet us</h1>
                {
                    showCarosel 
                    ?  <div className="contain-members"> 
                            <motion.div 
                                initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                viewport={{once:true}}
                                className="carousel">
                               {
                                   members.map((member, i)=>{
                                       return(
                                           <CardMembers key={i} member={member} index={i} />
                                       )
                                   })
                               }
                            </motion.div>
                       </div>
                    : <motion.div style={{padding:'5px'}} ref={carousel} className="contain-members" whileTap={{cursor:"grabbing"}}> 
                            <div className="carousel">
                                {
                                    members.map((member, i)=>{
                                        return(
                                            <CardMembers key={i} member={member} index={i} />
                                        )
                                    })
                                }
                            </div>
                        </motion.div>
                }

                

            </div>
        </section>
        
    )
}

export default Members