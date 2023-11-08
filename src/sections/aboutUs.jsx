import { testimonials } from "../data"
// import person1 from "../assets/images/person1.webp"
// import person2 from "../assets/images/person2.webp"
// import person3 from "../assets/images/person3.webp"
// import person4 from "../assets/images/person4.webp"
// import person5 from "../assets/images/person5.webp"

const AboutUs = () => {
    return(
        <section className="about-us">
            <div className="title">
                <b>linkedin testimonials</b>
                <h2>WHAT THEY SAY ABOUT US</h2>
            </div>
            <div className="card-contain">
                {
                    testimonials.map((tes, i)=>{
                        return(
                            <div key={tes.name} className="card">
                            <p>{tes.description}</p>
                            <div>
                                <img src={`src/assets/images/person${i + 1}.webp`} alt="icon person" />
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