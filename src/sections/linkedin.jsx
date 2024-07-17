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
                            className="row-contain1">
                            {
                                testimonials[0].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img loading="lazy" src={tes.image} alt="icon person" />
                                            <p>
                                                <b>{tes.name}</b>
                                                <br />
                                                {/* Profile: <a href={`https://${tes.profile}`} target="_blank">{tes.profile}</a><br/> */}
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
                                            <img loading="lazy" src={tes.image} alt="icon person" />
                                            <p>
                                                <b>{tes.name}</b>
                                                {/* <br />
                                                Profile: <a href={`https://${tes.profile}`} target="_blank">{tes.profile}</a> */}
                                                <br/>
                                            {tes.rol}
                                            </p>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                    {/* <div className="slide-contain">
                        <div
                            className="row-contain2">
                            {
                                testimonials[1].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img loading="lazy" src={tes.image} alt="icon person" />
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
                                testimonials[1].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img loading="lazy" src={tes.image} alt="icon person" />
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
                    </div> */}

                    {/* <div className="slide-contain">
                        <div
                            className="row-contain3">
                            {
                                testimonials[2].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img loading="lazy" src={tes.image} alt="icon person" />
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
                                testimonials[2].map((tes, i)=>{
                                    return(
                                    <div key={tes.name} className="card">
                                        <p>{tes.description}</p>
                                        <div>
                                            <img loading="lazy" src={tes.image} alt="icon person" />
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
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default Linkedin