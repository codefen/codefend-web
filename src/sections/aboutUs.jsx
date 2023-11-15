import { useRef, useEffect, useState } from "react";
import { testimonials } from "../data"

const AboutUs = () => {
    // const contain1 = useRef(null)
    // const contain2 = useRef(null)
    // const [controls1, setControls1] = useState({ showLeft: false, showRight: true });
    // const [controls2, setControls2] = useState({ showLeft: false, showRight: true });
  
    // useEffect(() => {
    //   const handleScroll = (contain, setControls) => {
    //     setControls({
    //       showLeft: contain.current.scrollLeft > 0,
    //       showRight: contain.current.scrollLeft < contain.current.scrollWidth - contain.current.clientWidth,
    //     });
    //   };
      
    //   const contain1Element = contain1.current;
    //   const contain2Element = contain2.current;
  
    //   contain1Element.addEventListener('scroll', () => handleScroll(contain1, setControls1));
    //   contain2Element.addEventListener('scroll', () => handleScroll(contain2, setControls2));

    // }, []);

    // const handleDirection = (target, contain) => {
    //     let direction = target.includes('right') ? 1 : -1;
    //     let scroll = contain.current.clientWidth * direction;
    //     contain.current.scrollBy({ left: scroll, behavior: 'smooth' });
    // };

    return(
        <section className="about-us">
            <div className="title">
                <b>linkedin testimonials</b>
                <h2>WHAT THEY SAY ABOUT US</h2>
            </div>

            <div className="contain">       
                <div className="slide-contain">  
                    {/* <button 
                    style={{ display: controls1.showRight ? 'block' : 'none' }} 
                    onClick={() => handleDirection('slide-right', contain1)} 
                    type="button" 
                    id="slide-right">right</button> */}
                    <div 
                        //  ref={contain1} 
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
                                            Profile: {tes.profile}<br/>
                                        {tes.rol}
                                        </p>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                    {/* <button 
                    style={{ display: controls1.showLeft ? 'block' : 'none' }} 
                    onClick={() => handleDirection('slide-left', contain1)}
                    type="button" 
                    id="slide-left">left</button> */}
                </div>


                <div className="slide-contain">
                    {/* <button 
                    style={{ display: controls2.showRight ? 'block' : 'none' }} 
                    onClick={() => handleDirection('slide-right-below', contain2)} 
                    type="button" 
                    id="slide-right-below">right below</button> */}
                    <div 
                        // ref={contain2} 
                        className="card-contain">
                        {
                            testimonials[1].map((tes, i)=>{
                                return(
                                <div key={tes.name} className="card">
                                    <p>{tes.description}</p>
                                    <div>
                                        <img src={`../assets/images/person${i + 4}.webp`} alt="icon person" />
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
                    {/* <button 
                    style={{ display: controls2.showLeft ? 'block' : 'none' }}
                    onClick={() => handleDirection('slide-left-below', contain2)} 
                    type="button" 
                    id="slide-left-below">left below</button> */}
                </div>
            </div>

        </section>
    )
}

export default AboutUs