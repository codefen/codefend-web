import { testimonials } from "../data"

const AboutUs = () => {
    return(
        <section className="about-us">
            <div className="tittle">
                <b>linkedin testimonials</b>
                <h2>WHAT THEY SAY ABOUT US</h2>
            </div>
            <div className="card-contain">
                {
                    testimonials.map((tes)=>{
                        return(
                            <div key={tes.name} className="card">
                            <p>{tes.description}</p>
                            <div>
                                <img src={`src/assets/images/person${tes.image}.webp`} alt="icon person" />
                                <p>
                                    <b>{tes.name}</b><br />
                                    Profile: {tes.profile}<br/>
                                   {tes.rol}
                                </p>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default AboutUs