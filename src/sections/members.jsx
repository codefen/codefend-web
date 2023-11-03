import { members } from "../data"

const Members = () => {
    return (
        
        <section className="members">
            <div className="container">
                <b>meet us</b>
                <h2>TEAM MEMBERS</h2>
                <div className="contain-members">
                    {
                        members.map((member)=>{
                            return(
                                <div key={member.name} className="card">
                                    <img loading="lazy" src={member.image} alt={`foto de ${member.name}`} />
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
            </div>
        </section>
        
    )
}

export default Members