import { useEffect, useRef, useState } from "react"
import { members } from "../data"
import { motion } from "framer-motion"

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
                <b>meet us</b>
                <h2>TEAM MEMBERS</h2>

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
                                           <motion.div 
                                               key={member.name} 
                                               initial={{opacity:0, x: -50, y: -50}}
                                               whileInView={{opacity:1, x: 0, y: 0,}}
                                               transition={{duration:0.3, delay: i * 0.1}}
                                               viewport={{once:true}}
                                               className="card">
                                               <img loading="lazy" src={member.image} alt={` ${member.name}`} />
                                               <p>
                                                   <span><b>{member.name}</b></span><br />
                                                   Rol: {member.rol} <br />
                                                   <a href={`https://${member.profile}`} target="_blank">Profile: {member.profile}</a> <br />
                                                   Experience: {member.experience}
                                               </p>
                                           </motion.div>
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
                                            <div 
                                                key={member.name}
                                                className="card">
                                                <img loading="lazy" src={member.image} alt={` ${member.name}`} />
                                                <p>
                                                    <span><b>{member.name}</b></span><br />
                                                    Rol: {member.rol} <br />
                                                    <a href={`https://${member.profile}`} target="_blank">Profile: {member.profile}</a> <br />
                                                    Experience: {member.experience}
                                                </p>
                                            </div>
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