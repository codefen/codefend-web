import { motion } from "framer-motion"

const CardMembers = ({member, index}) => {
    return (
        <motion.div 
            initial={{opacity:0, x: -50, y: -50}}
            whileInView={{opacity:1, x: 0, y: 0,}}
            transition={{duration:0.3, delay: index * 0.1}}
            viewport={{once:true}}
            onClick={()=>{
                console.log(member.name)
            }}
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
}

export default CardMembers