
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
                        <div className="text">                           
                            <h3>Profesional Summary</h3>
                            <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                            Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                            <h3>Key Achievements</h3>
                            <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                        </div>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-edgardo.png" alt="image-edgardo" />
                    <div className="information">
                        <h2>Edgardo Krauser</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <div className="text">              
                            <h3>Profesional Summary</h3>
                            <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                            Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                            <h3>Key Achievements</h3>
                            <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                        </div>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-ignacio.png" alt="image-ignacio" />
                    <div className="information">
                        <h2>Ignacio Gomez</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <div className="text">                   
                            <h3>Profesional Summary</h3>
                            <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                            Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                            <h3>Key Achievements</h3>
                            <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                        </div>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-hems.png" alt="image-hems" />
                    <div className="information">
                        <h2>Asiyanbi Mubashir</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <div className="text">
                            <h3>Profesional Summary</h3>
                            <p>Versatile Frontend Engineer specializing in web and mobile software development with  6 years of experience building user-friendly applications.</p>
                        </div>

                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-mixa.png" alt="image-mixa" />
                    <div className="information">
                        <h2>Misael Los santos</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <div className="text">       
                            <h3>Profesional Summary</h3>
                            <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                            Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                            <h3>Key Achievements</h3>
                            <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (6) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                        </div>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-peroni.png" alt="image-peroni" />
                    <div className="information">
                        <h2>Miguel Peroni</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <div className="text">                       
                            <h3>Profesional Summary</h3>
                            <p>Miguel is a Highly skilled Senior Technology & Business Consultant with a proven track record of delivering innovative solutions and driving business growth. Offering a wealth of experience in strategic planning, project management, and client relationship management. Focusing to leverage their expertise to contribute to the success of dynamic organization as Codefend is. <br /><br />

                            Miguel have a wide work experience with the most important technology vendors like: Cisco Systems, Proofpoint, Lenovo, DellEMC, IXSystems, HPE, Aruba, Fortinet, Juniper, Checkpoint, Nokia, Palo Alto, Huawei, RedHAt, Microsoft, Veeam, Acronis, Tenable, IBM, SolarWinds, Progress - Ipswitch, <br /><br />
                                        
                            He is based in Latam from where have been travelling & providing services for companies in North, Central and South America: Financial Services, Manufacturing, Media & Entertainment, Technology, Telco, Retail, and Government entities.</p>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div> 
                </div>
                <div className="profile">
                    <img src="../public/assets/images/bkg-zaballa.png" alt="image-peroni" />
                    <div className="information">
                        <h2>Federico Zaballa</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <div className="text">
                            
                            <h3>Profesional Summary</h3>
                            <p>A forward-thinking cybersecurity professional and Co-founder/Business Director at Codefend, I possess a demonstrated history of excelling in strategic business and technical leadership within the cybersecurity realm. My passion lies in navigating intricate cybersecurity challenges to formulate strategic business solutions, leveraging my expertise as a DevSecOps advocate, cloud architecture specialist, and data analytics enthusiast. As a seasoned leader, I specialize in the creation and implementation of robust security infrastructures, utilizing data-driven insights to strengthen cyber defenses and architecting secure, scalable cloud environments. <br /><br />

                                Beyond my technical proficiency, I am deeply immersed in the transformative world of Web3, exploring the potential of blockchain technologies to elevate cybersecurity measures. With a hands-on background as a startup founder, I am dedicated to steering Codefend toward resilience, innovation, and scalability. Grounded in the belief that cybersecurity is not merely a necessity but a strategic enabler, I am energized by the prospect of collaborating with like-minded professionals, establishing strategic partnerships, and propelling Codefend to the forefront of cybersecurity innovation. Let's connect, collaborate, and collectively secure the future.<br /><br />

                                T Specialist Certified Level 2:
                                Demonstrated proficiency and expertise as an IT Specialist with a Level 2 certification, showcasing advanced skills and knowledge in the field. <br /><br />

                                IBM Global Sales School Graduate:
                                Successfully completed the IBM Global Sales School, attaining a solid foundation in sales strategies and enhancing the ability to navigate complex sales environments.<br /><br />

                                Cloud Architect Certified (AWS - Azure):
                                Achieved certification as a Cloud Architect for both AWS and Azure, illustrating expertise in designing and implementing secure, scalable, and efficient cloud infrastructures.<br /><br />

                                Sales Leader with  $10MM Revenue ARR:
                                Led successful sales initiatives resulting in an annual recurring revenue (ARR) surpassing $10 million, highlighting a track record of driving significant business growth and revenue generation.<br /><br />

                                Startup Co-founder:
                                Founded a startup, demonstrating entrepreneurial spirit and leadership in building a new venture. This achievement reflects the ability to navigate the challenges of entrepreneurship and contribute to the creation of innovative solutions.</p>
                        </div>
                        <h3></h3>
                        <p></p>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Friends1