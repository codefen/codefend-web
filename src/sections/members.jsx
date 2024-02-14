import { useEffect, useRef, useState } from "react"
import { members } from "../data"
import { motion } from "framer-motion"
import CardMembers from "../components/card-members"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Members = () => {
    const carousel = useRef(null)
    const [screen, setScreen] = useState(1000)
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
    },[width, screen])


    return (
        <section className="members">
            <div className="container">
                <h1>meet us</h1>
                {
                    showCarosel 
                    ?  <div className="contain-members"> 
                            <Swiper 
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        navigation
                                slidesPerView={3}
                                breakpoints= {{
                                    600: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    400: {
                                        slidesPerView: 1,
                                        spaceBetween: 30
                                    },
                                    300: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    200: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    }
                               }}
                            >
                               {
                                   members.map((member, i)=>{
                                       return(
                                        <SwiperSlide key={i}>
                                            <CardMembers member={member} index={i} />
                                        </SwiperSlide>
                                       )
                                   })
                               }
                            </Swiper>
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