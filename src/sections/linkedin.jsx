import { useRef, useEffect, useState } from "react";
import { testimonials } from "../data"

const Linkedin = () => {

    return(
        <section className="about-us">
            <div className="container">
                <div className="title">
                    <h1>linkedin testimonials</h1>
                </div>

                <div className="contain">
                    <div className="slide-contain">
                        <div
                            className="card-contain">
                            {
                                testimonials[0].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img src={`../assets/images/person${i + 1}.webp`} alt="icon person" />
                                            <p>
                                                <b>{tes.name}</b><br />
                                                Profile: <a href={`https://${tes.profile}`} target="_blank">{tes.profile}</a><br/>
                                            {tes.rol}
                                            </p>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            {
                                testimonials[0].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img src={`../assets/images/person${i + 1}.webp`} alt="icon person" />
                                            <p>
                                                <b>{tes.name}</b><br />
                                                Profile: <a href={`https://${tes.profile}`} target="_blank">{tes.profile}</a><br/>
                                            {tes.rol}
                                            </p>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        {/* <div
                            className="card-contain">
                            {
                                testimonials[0].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img src={`../assets/images/person${i + 1}.webp`} alt="icon person" />
                                            <p>
                                                <b>{tes.name}</b><br />
                                                Profile: <a href={`https://${tes.profile}`} target="_blank">{tes.profile}</a><br/>
                                            {tes.rol}
                                            </p>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div> */}
                    </div>


                    <div className="slide-contain">
                        <div
                            className="card-contain">
                            {
                                testimonials[0].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img src={`../assets/images/person${i + 1}.webp`} alt="icon person" />
                                            <p>
                                                <b>{tes.name}</b><br />
                                                Profile: <a href={`https://${tes.profile}`} target="_blank">{tes.profile}</a><br/>
                                            {tes.rol}
                                            </p>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            {
                                testimonials[0].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img src={`../assets/images/person${i + 1}.webp`} alt="icon person" />
                                            <p>
                                                <b>{tes.name}</b><br />
                                                Profile: <a href={`https://${tes.profile}`} target="_blank">{tes.profile}</a><br/>
                                            {tes.rol}
                                            </p>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Linkedin