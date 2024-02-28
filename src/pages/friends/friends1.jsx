
import { members } from "../../data"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const teamFilter = ['Alvaro Yaquemet', 'Leandro Ferrari', 'Elias Bustos', 'Francisco Ruiz', 'Emiliano Peralta', 'Maria Luca Fenochietto', 'Maximiliano Daniel Olivera', 'Esteban Cano', 'Matias', 'Marcos'];
const filtered = members.filter((data) => !teamFilter.includes(data.name));

const Friends1 = () => {

    const [indexActive, setIndexActive] = useState(0);
    const [cards, setCards] = useState([]);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const cardElements = document.querySelectorAll('.card');
        const profileElements = document.querySelectorAll('.profile');

        setCards(cardElements);
        setProfiles(profileElements);

        setIndexActive(0);
    }, []);


    const handleSlideChange = ({ activeIndex }) => {
        setIndexActive(activeIndex);

        profiles.forEach((card) => card.classList.remove('showprofile'));
        profiles[activeIndex].classList.add('showprofile');
    };

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
                breakpoints={{
                    2300: {
                        slidesPerView: 8,
                        spaceBetween: 40
                    },
                    2000: {
                        slidesPerView: 7,
                        spaceBetween: 40
                    },
                    1550: {
                        slidesPerView: 6,
                        spaceBetween: 40
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    }
                }}
                onSlideChange={window.innerWidth < 600 ? handleSlideChange : () => { }}
            >
                {
                    filtered.map((member, i) => {
                        return (
                            <SwiperSlide key={i}>
                                {/* <CardMembers key={i} member={member} index={i} select={SelectCard}/> */}
                                <div
                                    onClick={window.innerWidth > 600 ? () => SelectCard(i) : () => { }}
                                    className={`card ${i === indexActive && window.innerWidth < 600 ? 'active' : ''}`}>
                                    <img loading="lazy" src={member.image} alt={` ${member.name}`} />
                                    <p>
                                        <span><b>{member.name}</b></span><br />
                                        Rol: {member.rol} <br />
                                        Profile:<br />
                                        <a href={`https://${member.profile}`} target="_blank">{member.profile}</a> <br />
                                        Experience: {member.experience}
                                    </p>
                                </div>
                            </SwiperSlide>

                        )
                    })
                }

            </Swiper>
            
            <div className="container">
                <div className="profile-contain">
                    <div className="profile showprofile">
                        <img src="../assets/images/bkg-chris.png" alt="image-chris" />

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
                        <img loading="lazy" src="../assets/images/bkg-edgardo.png" alt="image-edgardo" />
                        <div className="information">
                            <h2>Edgardo Krauser</h2>
                            <span>CIBER SECURITY</span>
                            <div className="text">
                                <h3>Profesional Summary</h3>
                                <p>Edgardo Krause is an experienced Senior Security Engineer with a focus on cybersecurity and penetration testing. He specializes in identifying and mitigating security vulnerabilities in web applications, mobile applications, and network infrastructure. With a strong background in security research, testing automation, and software development, Edgardo is dedicated to staying ahead of emerging threats and trends in the field. He has a proven track record in contributing to global security efforts and has worked on various penetration testing and red teaming engagements. <br /><br />
                                    He  holds publics recognitions from differentes companies and governaments, among them the US Department of State and the CERN.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img loading="lazy" src="../assets/images/bkg-ignacio.png" alt="image-ignacio" />
                        <div className="information">
                            <h2>Ignacio Gómez</h2>
                            <span>EXPERT IN USER BEHAVIOR AND INTERFACES</span>
                            <div className="text">
                                <h3>Professional Summary</h3>
                                <p>Ignacio Gómez is a distinguished expert specializing in the intricate field of user behavior and interfaces. His expertise lies in the strategic application of behavioral science to interface design, enabling a profound understanding of user interactions with digital environments. Gómez possesses a unique blend of technical acumen and psychological insight, making him adept at predicting and influencing user behavior through interface design.<br /><br />
                                    Throughout his career, Gómez has been instrumental in conducting advanced human behavior research at major corporations. His work primarily involves dissecting complex user interactions and employing this knowledge to enhance interface design, thereby subtly guiding user actions and decisions. His approach is deeply rooted in technical sophistication, focusing on the psychological aspects of user interaction rather than mere aesthetic design.</p>
                                <h3>Key Achievements</h3>
                                <p>Developed sophisticated models for predicting user behavior, significantly enhancing user engagement and satisfaction - Pioneered research methods in user behavior analysis, leading to groundbreaking insights in interface usability - Successfully implemented strategies for user behavior manipulation through interface design, resulting in improved business outcomes for several large-scale corporations.</p>
                            </div>
                        </div>

                    </div>
                    <div className="profile">
                        <img loading="lazy" src="../assets/images/bkg-hems.png" alt="image-hems" />
                        <div className="information">
                            <h2>Asiyanbi 'Am' Mubashir</h2>
                            <span>FRONTEND SOFTWARE ENGINEER</span>
                            <div className="text">
                                <h3>Professional Summary</h3>
                                <p>From Nigeria, Asiyanbi "Am" Mubashir excels in frontend development with SolidJS, ReactJS, and React Native with Expo. Passionate about TypeScript and Firebase, his work is characterized by responsive design and scalable applications using Tailwind CSS. With experience in Node.js and Express, as well as Next.js, SASS, and GraphQL, Mubashir combines creativity and technical skill to drive innovation in software development.</p>
                                <h3>Key Achievements</h3>
                                <p>At Codefend.com, he led projects that enhanced user experience. His leadership in mobile development increased user engagement. Academically recognized at the University of Ilorin, his robot car project showcases his technical ingenuity.</p>
                            </div>
                        </div>

                    </div>
                    <div className="profile">
                        <img loading="lazy" src="../assets/images/bkg-mixa.png" alt="image-mixa" />
                        <div className="information">
                            <h2>Misael Los santos</h2>
                            <span>FRONT END DEVELOPER</span>
                            <div className="text">
                                <h3>Profesional Summary</h3>
                                <p>With over a year and a half of experience as a front-end developer, I have excelled in crafting responsive and visually appealing websites/applications using cutting-edge technologies such as Angular and React for various national companies. My expertise extends beyond front-end development, as I possess robust skills in full-stack development, underscored by the creation of intuitive and aesthetically pleasing interfaces in collaborative projects. <br /><br />
                                    My professional journey reflects a continuous commitment to personal growth, highlighted by my exploration into cybersecurity and pentesting at Codefend. This adaptability and ongoing pursuit of new skills position me as a versatile professional ready to tackle contemporary challenges in the digital realm.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img loading="lazy" src="../assets/images/bkg-peroni.png" alt="image-peroni" />
                        <div className="information">
                            <h2>Miguel Peroni</h2>
                            <span>Business</span>
                            <div className="text">
                                <h3>Profesional Summary</h3>
                                <p>Miguel is a Highly skilled Senior Technology & Business Consultant with a proven track record of delivering innovative solutions and driving business growth. Offering a wealth of experience in strategic planning, project management, and client relationship management. Focusing to leverage their expertise to contribute to the success of dynamic organization as Codefend is. <br /><br />

                                    Miguel have a wide work experience with the most important technology vendors like: Cisco Systems, Proofpoint, Lenovo, DellEMC, IXSystems, HPE, Aruba, Fortinet, Juniper, Checkpoint, Nokia, Palo Alto, Huawei, RedHAt, Microsoft, Veeam, Acronis, Tenable, IBM, SolarWinds, Progress - Ipswitch, <br /><br />

                                    He is based in Latam from where have been travelling & providing services for companies in North, Central and South America: Financial Services, Manufacturing, Media & Entertainment, Technology, Telco, Retail, and Government entities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img loading="lazy" src="../assets/images/bkg-zaballa.png" alt="image-zaballa" />
                        <div className="information">
                            <h2>Federico 'Fz' Zaballa</h2>
                            <span>CLOUD SECURITY</span>
                            <div className="text">
                                <h3>Professional Summary</h3>
                                <p>Federico "Fz" Zaballa, a visionary in cybersecurity, advocating for DevSecOps, specializing in cloud architecture, and a fervent supporter of data analytics. His expertise in building secure, scalable cloud infrastructures and his enthusiasm for Web3 and blockchain technologies underscore his comprehensive approach to enhancing cybersecurity measures.<br /><br />
                                    As a startup founder, Zaballa's commitment to innovation, resilience, and scalability has positioned Codefend at the cutting edge of cybersecurity. His belief in cybersecurity as a strategic asset drives his pursuit of collaboration and partnership, aiming to establish Codefend as a leader in the field.</p>
                                <h3>Key Achievements</h3>
                                <p>Certified IT Specialist Level 2, demonstrating advanced expertise in IT security - Graduate of IBM Global Sales School, enhancing skills in complex sales strategies - Cloud Architect Certified for AWS and Azure, showcasing abilities in cloud infrastructure design and implementation</p>
                            </div>
                        </div>

                    </div>
                    <div className="profile">
                        <img loading="lazy" src="../assets/images/bkg-gaspi.png" alt="image-gaspar" />
                        <div className="information">
                            <h2>Gaspar 'Go' O.</h2>
                            <span>OFFENSIVE SECURITY</span>
                            <div className="text">
                                <h3>Professional Summary</h3>
                                <p>From Buenos Aires, Argentina, Gaspar "Go" O., a Computer Science student, specializes in Pentesting, DevSecOps, and Cloud Security. With hands-on experience, he aims to strengthen defenses against digital threats by blending theory and practice to develop innovative security strategies. Gaspar is committed to integrating security practices from design to implementation, ensuring applications and data are secure in challenging environments.</p>
                                <h3>Key Achievements</h3>
                                <p>Notably skilled in Pentesting for identifying and mitigating critical vulnerabilities, Gaspar has led DevSecOps initiatives to embed security into the software development lifecycle. As a cloud security expert, he has contributed to safeguarding key infrastructures, promoting a security culture in the tech field.</p>
                            </div>
                        </div>

                    </div>
                    {/* <div className="profile">
                        <img loading="lazy" src="../assets/images/bkg-matias.png" alt="image-matias" />
                        <div className="information">
                            <h2>Matias (Santiago) Trinidad</h2>
                            <span>ANGULAR FRONTEND & BACKEND DEVELOPER</span>
                            <div className="text">
                                <h3>Professional Summary</h3>
                                <p>Matias (Santiago) Trinidad, an Angular Expert from Argentina, specializes in full-stack development with a focus on Angular for frontend and FastAPI for backend. Passionate about #angular and open to Full Stack Engineer and Javascript Developer roles.<br /><br />
                                    With a Licenciatura in Computer Science from Universidad Nacional de Córdoba, Matias is skilled in Docker, Amazon S3, SQL, Git, and JavaScript, reflecting a versatile tech stack.</p>
                                <h3>Key Achievements</h3>
                                <p>Overcoming technical challenges with SSL and mixed content issues. Contributed valuable insights and resources to the developer community, enhancing knowledge sharing and problem-solving techniques. Recognized for his ability to integrate complex technologies into scalable, user-friendly applications, Matias continues to explore innovative solutions in web development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img loading="lazy" src="../assets/images/bkg-marcos.png" alt="image-marcos" />
                        <div className="information">
                            <h2>Marcos Lopez</h2>
                            <span>FULL STACK DEVELOPER</span>
                            <div className="text">
                                <h3>Professional Summary</h3>
                                <p>Marcos Lopez, a burgeoning Full Stack Developer from Posadas, Misiones, Argentina, merges passion with proficiency in web and database development. His skill set spans front-end technologies like HTML, CSS, JavaScript, Angular, and TypeScript, and extends to back-end expertise in Java and Spring Boot.<br /><br />
                                    Highlight ability to design engaging user interfaces and tackle back-end challenges. A graduate of Universidad Gastón Dachary in Informatics Engineering, he embodies a blend of technical knowledge and practical application, poised to make significant contributions to the tech industry.</p>
                                <h3>Key Achievements</h3>
                                <p>Developed a comprehensive portfolio site to display projects and skills. Led the front-end development of "Books Leaks," a collaborative blog project, demonstrating strong design and development capabilities. Excelled in academia and practical programming competitions, underpinning his theoretical knowledge with real-world application.</p>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Friends1