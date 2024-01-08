import { useRef } from "react"


const Section2 = () => {

  const slide = useRef()

  function slideDirection(number, {target}){
    const slide4 = document.getElementById("slide4");
    const slide5 = document.getElementById("slide5");
    const slide6 = document.getElementById("slide6");
    const {current} = slide
    switch(number){
      case 1:
        current.style.transform = "translateX(0%)"
        target.classList.add('active');
        slide5.classList.remove('active');
        slide6.classList.remove('active');
        break
      case 2:
        current.style.transform = "translateX(-100%)"
        target.classList.add('active');
        slide4.classList.remove('active');
        slide6.classList.remove('active');
        break
      case 3:
        current.style.transform = "translateX(-200%)"
        target.classList.add('active');
        slide4.classList.remove('active');
        slide5.classList.remove('active');
        break
    }
  }

    return (
        <section className="section-2">
          
            <ul>
              <li id="slide4" onClick={(e)=>slideDirection(1,e)}>

                    <h3>internal network pentest</h3>
                    <p>
                      Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of anonymous and authenticated users.
                    </p>
                  <img src="../../public/assets/images/triangle.png" alt="triangle" />

              </li>
              <li id="slide5" onClick={(e)=>slideDirection(2,e)} >

                    <h3>external network pentest</h3>
                    <p>
                      Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of anonymous and authenticated users.
                    </p>
                  <img src="../../public/assets/images/triangle.png" alt="triangle" />

              </li>
              <li id="slide6" onClick={(e)=>slideDirection(3,e)} className="active">

                  <h3>source code review</h3>
                  <p>
                    Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of anonymous and authenticated users.
                  </p>
                  <img src="../../public/assets/images/triangle.png" alt="triangle" />

              </li>
            </ul>
            <div ref={slide} style={{transform:'translateX(-200%)'}} className="slide-contain">
              <div className="contain" style={{
                backgroundImage:'url("../../public/assets/images/img-services7.png")'
              }}>
              <h2>SERVICES: INTERNAL NETWORK PENTEST</h2>

                  <ul>
                    <li>
                      <h3><b>SUMMARY</b></h3>
                      <p>
                      Codefend does manual and semi-automated penetration testing processes using commercial and proprietary security software to evaluate your web application from the perspective of an attacker
                      </p>
                    </li>
                    <li>
                      <h3>MORE DETAILS:</h3>
                      <p>
                      Our internal network penetration testing simulates real-world attacks originating from within your organization. This assessment helps evaluate the effectiveness of internal security controls and identifies vulnerabilities that may be exploited by insiders or malicious actors.
                      </p>
                    </li>
                    <li>
                      <h3><b>KEY BENEFITS</b></h3>
                      <p>               
                      - Simulates real-world internal attack scenarios. <br />
                      - Evaluates internal security controls effectively. <br />
                      - Identifies vulnerabilities exploitable by insiders.
                      </p>
                    </li>
                  </ul>
              </div>
              <div className="contain" style={{
                backgroundImage:'url("../../public/assets/images/img-services6.png")'
              }}>
              <h2>CODEFEND SERVICES: EXTERNAL NETWORK PENTESTSUMMARY</h2>

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
                      Codefend conducts external network penetration tests to assess the security of your perimeter defenses. Through simulated attacks from an external perspective, we identify vulnerabilities and potential points of entry to fortify your external network security.

                      </p>
                    </li>
                    <li>
                      <h3><b>KEY BENEFITS</b></h3>
                      <p>               
                      - Assesses and fortifies perimeter defense effectiveness. <br />
                      - Identifies external vulnerabilities and entry points. <br />
                      - Enhances overall security against external threats.
                      </p>
                    </li>
                  </ul>
              </div>
              <div className="contain">
              <h2>SOURCE CODE REVIEW:</h2>

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
                      Codefend offers source code review services to thoroughly examine your application's source code for security vulnerabilities. Our experts provide in-depth analysis to identify and address potential security issues, ensuring the integrity of your software.

                      </p>
                    </li>
                    <li>
                      <h3><b>KEY BENEFITS:</b></h3>
                      <p>               
                      - Thoroughly examines and secures application source code. <br />
                      - Identifies and addresses potential security issues. <br />
                      - Ensures the integrity and security of software.

                      </p>
                    </li>
                  </ul>
              </div>
            </div>
      </section>
    )
}

export default Section2
