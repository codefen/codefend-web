import { members } from "../data"
import { motion } from "framer-motion"

const Members = () => {
    return (
        
        <section className="members">
            <div className="container">
                <b>meet us</b>
                <h2>TEAM MEMBERS</h2>
                <div className="contain-members">
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
                                    <img loading="lazy" src={member.image} alt={`foto de ${member.name}`} />
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
                </div>
            </div>
        </section>
        
    )
}

export default Members