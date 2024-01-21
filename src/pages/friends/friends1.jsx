
import { members } from "../../data"
import Slider from "react-slick";
import CardMembers from "../../components/card-members"

const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
        {
            breakpoint: 3000,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
        {
            breakpoint: 1500,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ],
    // appendDots: dots => (
    //     <div
    //       style={{
    //         backgroundColor: "#ddd",
    //         borderRadius: "10px",
    //         padding: "10px"
    //       }}
    //     >
    //       <ul style={{ margin: "0px" }}> {dots} </ul>
    //     </div>
    //   ),
    //   customPaging: i => (
    //     <div
    //       style={{
    //         width: "30px",
    //         color: "blue",
    //         border: "1px blue solid"
    //       }}
    //     >
    //       {i + 1}
    //     </div>
    //   )
};

const Friends1 = ()=> {
    return (
        <section 
        className="friends1">
            <Slider {...settings}> 
                {
                    members.map((member, i)=>{
                        return(
                          
                            <CardMembers key={i} member={member} index={i} />
                          
                        )
                    })
                }
            </Slider>
            <div className="perfil-contain">
                <div className="perfil">
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
                <div className="perfil">
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
                <div className="perfil">
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
                <div className="perfil">
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
                <div className="perfil">
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
                <div className="perfil">
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
            </div>
        </section>
    )
}

export default Friends1