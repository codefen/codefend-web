import { motion } from "framer-motion"

const Features = () => {
    return(
        <section className="features">
            <h2>remarkable features</h2>
            <div className="contain-columns">                 
                <div className="column">
                    <div>
                        <motion.div 
                            initial={{x:'-20vw', opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:1, delay:0.3}}
                            className="subtitle_features">
                            <img src="../../public/assets/images/check-red.webp" alt="" />
                            <motion.h3>specialized customer support</motion.h3>
                        </motion.div>
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.9}}
                        ><b>priorizamos brindar soluciones rapidas & efectivas a todos nuestros clientes.</b>
                        software cuenta con un sistema de chat integrado que nos hace acordar a IRC</motion.p>
                    </div>
                    <motion.img
                    initial={{y:'20vw', opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:1, delay:1.5}} 
                    loading="lazy" 
                    src="../assets/images/app-black2.webp" 
                    alt="image of app" />
                </div>
                <div className="column">
                    <div>
                        <motion.div 
                            initial={{x:'20vw', opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:1, delay:0.3}}
                            className="subtitle_features">
                            <img src="../../public/assets/images/check-red.webp" alt="" />
                            <motion.h3>attack surface surveillance</motion.h3>
                        </motion.div>
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.9}}
                        ><b>Unvenil your shadow IT with our automated attack surface expansion.</b>Descubra y conserve actualizado su superficie de ataque con nuestros sistemas de detección automatizado y manual</motion.p>
                    </div>
                    <motion.img
                    initial={{y:'20vw', opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:1, delay:1.5}} 
                    viewport={{once:true}}
                    loading="lazy" 
                    src="../assets/images/app-black4.webp" 
                    alt="image of app" />
                </div>
            </div> 
            <div className="app">
                <div className="contain">
                    <div className="subtitle_app">
                        <img src="../../public/assets/images/thing.webp" alt="" />
                        <div>
                            <h3>how secure are the applications you have installed?</h3>
                            <p>Codefend realiza análisis de aplicaciones mobile en detalle. Simplemente añada las aplicaciones que ud y su equipo utilizan en nuestra aplicación, y  al finalizar le daremos un informe completo sobre las operaciones que la aplicación realiza con su información, y la seguridad de la misma</p>
                        </div>
                    </div>
                    <img loading="lazy" src="../assets/images/app-black3.webp" alt="image of app " />
                </div>
            </div>      
        </section>
    )
}

export default Features