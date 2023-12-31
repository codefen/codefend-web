import { useState, useRef } from "react"

const Section1 = () => {

  const slide = useRef()

  function slideDirection(number, {target}){
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const slide3 = document.getElementById("slide3");
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
        <section className="section-1">
            <ul>
              <li id="slide1" onClick={(e)=>slideDirection(1,e)} className="active">
              
                    <h3 >web application pentest</h3>
                    <p>
                      Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of anonymous and authenticated users.
                    </p>
                    <img src="../../public/assets/images/triangle.png" alt="triangle" />

              </li>
              <li id="slide2" onClick={(e)=>slideDirection(2,e)}>
            
                    <h3>mobile application pentest</h3>
                    <p>
                      Ensure the security of your mobile application with our decentralized mobile application pentest services. Protect your user’s sensitive information with our professional services.
                    </p>
                    <img src="../../public/assets/images/triangle.png" alt="triangle" />
              </li>
              <li id="slide3" onClick={(e)=>slideDirection(3,e)}>
            
                  <h3>cloud security posture</h3>
                  <p>
                    Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of anonymous and authenticated users.
                  </p>
                  <img src="../../public/assets/images/triangle.png" alt="triangle" />

              </li>
            </ul>
            <div ref={slide} className="slide-contain">
              <div className="contain" style={{
                backgroundImage:'url("../../public/assets/images/img-services4.png")'
              }}>
                <h2>SERVICES: WEB APPLICATION PENETRATION TEST</h2>
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
                          Codefend specializes in providing penetration testing services focused on assessing the security of web applications and web APIs. Our team of security experts conducts thorough tests to identify and mitigate potential vulnerabilities, ensuring the robustness and resilience of your web applications and services against potential threats. With a focus on risk detection and security strengthening, our assessments provide a comprehensive perspective to help ensure the protection of your digital assets against possible attacks and security breaches.

                          </p>
                    </li>
                    <li>
                        <h3><b>KEY BENEFITS</b></h3>
                        <p>
                        - Identifies and mitigates web application vulnerabilities. <br />
                        - Enhances web application resilience against cyber threats. <br />
                        - Provides a comprehensive security perspective for digital assets.
                        </p>
                    </li>
                  </ul>
              </div>
              <div className="contain">
                  <h2>SECURITY:  MOBILE APPLICATION PENETRATION TEST</h2>

                  <ul>
                    <li>
                          <h3><b>SUMMARY:</b></h3>
                          <p>
                            Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of anonymous and authenticated users.
                          </p>
                    </li>
                    <li>
                          <h3>MORE DETAILS:</h3>
                          <p>
                              Codefend extends its expertise to provide penetration testing services tailored for mobile applications. Our dedicated team of security professionals conducts comprehensive assessments to evaluate the security of your mobile apps. Through rigorous testing, we identify and address potential vulnerabilities, enhancing the resilience of your mobile applications against security threats. With a strategic focus on risk detection and security reinforcement, our assessments offer a holistic perspective, ensuring the safeguarding of your digital assets from potential attacks and security breaches.
                          </p>
                    </li>
                    <li>
                        <h3><b>KEY BENEFITS</b></h3>
                        <p>
                          - Evaluates and addresses mobile app security risks. <br />
                          - Strengthens the resilience of mobile applications. <br />
                          - Offers a holistic approach to safeguarding digital assets.
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

export default Section1