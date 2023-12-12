import { motion } from "framer-motion"

const Features = () => {
    return(
        <section className="features">
            <h2>remarkable features</h2>
            <div className="contain-columns">                 
                <div className="column">
                    <div>
                        <motion.h3
                        initial={{x:'-20vw', opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1, delay:0.3}}
                        >specialized customer support</motion.h3>
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:1, delay:0.9}}
                        ><b>priorizamos brindar soluciones rapidas & efectivas a todos nuestros clientes.</b>
                        software cuenta con un sistema de chat integrado que nos hace acordar a IRC</motion.p>
                    </div>
                    <motion.img
                    initial={{y:'20vw', opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:1, delay:1.5}} 
                    loading="lazy" 
                    src="../assets/images/app-black2.webp" 
                    alt="image of app" />
                </div>
                <div className="column">
                    <div>
                        <motion.h3
                        initial={{x:'20vw', opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1, delay:0.3}}
                        >attack surface surveillance</motion.h3>
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:1, delay:0.9}}
                        ><b>Unvenil your shadow IT with our automated attack surface expansion.</b>Descubra y conserve actualizado su superficie de ataque con nuestros sistemas de detección automatizado y manual</motion.p>
                    </div>
                    <motion.img
                    initial={{y:'20vw', opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:1, delay:1.5}} 
                    loading="lazy" 
                    src="../assets/images/app-black4.webp" 
                    alt="image of app" />
                </div>
            </div> 
            <div className="app">
                <img loading="lazy" src="../assets/images/app-black3.webp" alt="image of app " />
            </div>      
        </section>
    )
}

export default Features