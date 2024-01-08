import { useRef } from "react";
const Section3 = () => {

  const slide = useRef()

  function slideDirection(number, {target}){
    const slide1 = document.getElementById("slide7");
    const slide2 = document.getElementById("slide8");
    const slide3 = document.getElementById("slide9");
    const {current} = slide
    switch(number){
      case 1:
        current.style.transform = "translateX(0%)"
        target.classList.add('active');
        slide2.classList.remove('active');
        slide3.classList.remove('active');
        break
      case 2:
        current.style.transform = "translateX(-100%)"
        target.classList.add('active');
        slide1.classList.remove('active');
        slide3.classList.remove('active');
        break
      case 3:
        current.style.transform = "translateX(-200%)"
        target.classList.add('active');
        slide1.classList.remove('active');
        slide2.classList.remove('active');
        break
    }
  }

    return (
        <section className="section-3">
            <ul>
              <li id="slide7" onClick={(e)=>slideDirection(1,e)}>

                    <h3>intel & research services</h3>
                    <p>
                      Gather actionable intelligence with our open source and human Intelligence services. Improve your decision-making and stay ahead of the competition with our decentralized open source intel services.
                    </p>
                    <img src="../../public/assets/images/triangle.png" alt="triangle"/>

              </li>
              <li id="slide8" onClick={(e)=>slideDirection(2,e)}  className="active">

                    <h3>advanced social engineering</h3>
                    <p>
                      Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of anonymous and authenticated users.
                    </p>
                    <img src="../../public/assets/images/triangle.png" alt="triangle" />

              </li>
              <li id="slide9" onClick={(e)=>slideDirection(3,e)}>

                  <h3>dark web, data leaks, leak clouds</h3>
                  <p>   
                      Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of anonymous and authenticated users.
                  </p>
                  <img src="../../public/assets/images/triangle.png" alt="triangle" />

              </li>
            </ul>
            <div ref={slide} style={{transform:'translateX(-100%)'}} className="slide-contain">
              <div className="contain" style={{
                backgroundImage:'url("../../public/assets/images/img-services7.png")'
              }}>
              <h2>SERVICES: INTEL & RESEARCH SERVICES</h2>

                  <ul>
                    <li>
                      <h3><b>SUMMARY</b></h3>
                      <p>
                      Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of an attacker.
                      </p>
                    </li>
                    <li>
                      <h3>MORE DETAILS:</h3>
                      <p>
                      Codefend provides intelligence and research services to keep you informed about emerging threats, vulnerabilities, and trends. Our team conducts in-depth research to provide valuable insights tailored to your organization's security needs.

                      </p>
                    </li>
                    <li>
                      <h3><b>KEY BENEFITS:</b></h3>
                      <p>               
                      - Keeps organizations informed about emerging threats and trends. <br />
                      - Provides in-depth research for tailored security insights. <br />
                      - Enhances situational awareness for proactive security measures.
                      </p>
                    </li>
                  </ul>
              </div>
              <div className="contain" >
              <h2>SERVICES: ADVANCES SOCIAL ENGINEERING</h2>

                  <ul>
                    <li>
                      <h3><b>SUMMARY </b></h3>
                      <p>
                      Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of an attacker.
                      </p>
                    </li>
                    <li>
                      <h3>MORE DETAILS:</h3>
                      <p>
                      Our advanced social engineering tests go beyond traditional methods to assess your organization's susceptibility to sophisticated social engineering attacks. This includes targeted phishing, vishing, and other techniques to evaluate human-centric security risks.
                      </p>
                    </li>
                    <li>
                      <h3><b>KEY BENEFITS</b></h3>
                      <p>               
                      - Assesses susceptibility to sophisticated social engineering attacks. <br />
                      - Evaluates human-centric security risks with targeted techniques. <br />
                      - Strengthens defenses against social engineering threats.
                      </p>
                    </li>
                  </ul>
              </div>
              <div className="contain" style={{
                backgroundImage:'url("../../public/assets/images/img-services5.png")'
              }}>
                <h2>CLOUD:  SECURITY POSTURE MANAGMENT</h2>
                  <ul>
                    <li>
                    <h3><b>SUMMARY:</b></h3>

                          <p>
                          Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of an attacker.

                          </p>
                    </li>
                    <li>
                          <h3>MORE DETAILS:</h3>
                          <p>
                          Codefend also offers Cloud Security Posture Management services, helping you evaluate and enhance the security of your cloud infrastructure. Our team assesses your cloud security posture, identifies misconfigurations, and provides recommendations to fortify your cloud environment. With a proactive approach to cloud security, we assist in mitigating risks and ensuring a robust security foundation for your cloud-based assets.

                          </p>
                    </li>
                    <li>
                        <h3><b>KEY BENEFITS</b></h3>
                        <p>
                        - Evaluates and enhances cloud infrastructure security. <br />
                        - Identifies and rectifies misconfigurations in the cloud. <br />
                        - Provides proactive measures for robust cloud security.
                        </p>
                    </li>
                  </ul>
              </div>
            </div>
      </section>
    )
}

export default Section3