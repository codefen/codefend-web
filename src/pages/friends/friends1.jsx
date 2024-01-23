
import { members } from "../../data"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Friends1 = ()=> {
    const teamFilter = ['Alvaro Yaquemet','Leandro Ferrari','Elias Bustos','Francisco Ruiz','Emiliano Peralta','Maria Luca Fenochietto','Maximiliano Daniel Olivera','Esteban Cano'];
    const filtered = members.filter((data) => !teamFilter.includes(data.name));
    let cards = [];
    let profiles = [];


    useEffect(()=>{
      cards = document.querySelectorAll('.card');
      profiles = document.querySelectorAll('.profile');
      cards[0].classList.add('active')
    },[])  

    const SelectCard = (index) => {
         cards.forEach((card) => card.classList.remove('active'));
         profiles.forEach((card) => card.classList.remove('showprofile'));
         cards[index].classList.toggle('active');
         profiles[index].classList.toggle('showprofile');
     }


    return (
        <section 
        className="friends1">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={6}
                navigation
                breakpoints= {{
                    1550: {
                        slidesPerView: 6,
                        spaceBetween: 40
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    }
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                loop={true}
            > 
                {
                    filtered.map((member, i)=>{
                        return(
                          <SwiperSlide key={i}>
                              {/* <CardMembers key={i} member={member} index={i} select={SelectCard}/> */}
                                <div 
                                    onClick={()=>SelectCard(i)}
                                    className="card">
                                    <img loading="lazy" src={member.image} alt={` ${member.name}`} />
                                    <p>
                                        <span><b>{member.name}</b></span><br />
                                        Rol: {member.rol} <br />
                                        <a href={`https://${member.profile}`} target="_blank">Profile: {member.profile}</a> <br />
                                        Experience: {member.experience}
                                    </p>
                                </div>
                          </SwiperSlide>
                          
                        )
                    })
                }
            </Swiper>
            <div className="profile-contain">
                <div className="profile showprofile">
                    <img src="../public/assets/images/bkg-chris.png" alt="image-chris" />

                    <div className="information">
                        <h2>Christian 'Ch' Russo</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <h3>Profesional Summary</h3>
                        <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                           Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                        <h3>Key Achievements</h3>
                        <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-edgardo.png" alt="image-edgardo" />
                    <div className="information">
                        <h2>Edgardo Krauser</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <h3>Profesional Summary</h3>
                        <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                           Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                        <h3>Key Achievements</h3>
                        <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-ignacio.png" alt="image-ignacio" />
                    <div className="information">
                        <h2>Ignacio Gomez</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <h3>Profesional Summary</h3>
                        <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                           Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                        <h3>Key Achievements</h3>
                        <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-hems.png" alt="image-hems" />
                    <div className="information">
                        <h2>Asiyanbi Mubashir</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <h3>Profesional Summary</h3>
                        <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                           Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                        <h3>Key Achievements</h3>
                        <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-mixa.png" alt="image-mixa" />
                    <div className="information">
                        <h2>Misael Los santos</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <h3>Profesional Summary</h3>
                        <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                           Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                        <h3>Key Achievements</h3>
                        <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-peroni.png" alt="image-peroni" />
                    <div className="information">
                        <h2>Miguel Peroni</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <h3>Profesional Summary</h3>
                        <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                           Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                        <h3>Key Achievements</h3>
                        <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Friends1