
const Section3 = () => {
  function slideDirection(number) {
    const slide3 = document.querySelector(".section-3 .slide-contain");
    // const slides = document.querySelectorAll(".section-3 .slide-contain .contain");
    const slideItems3 = document.querySelectorAll(".section-3 .items .item");
    const transformValue = `translateX(${(number - 1) * -100}%)`;

    // Setear la clase "active" al slide correspondiente
    slideItems3.forEach((item, index) => {
      item.classList.toggle("active", index + 1 === number);
    });

    // Mover el contenedor de los slides
    slide3.style.transform = transformValue;
  }

    return (
        <section className="section-3">
            <div className="items">
              <div className="item" onClick={()=>slideDirection(1)}>

                    <h3>intel & research services</h3>
                    <p>
                      Gather actionable intelligence with our open source and human Intelligence services. Improve your decision-making and stay ahead of the competition with our decentralized open source intel services.
                    </p>
                    <img src="../assets/images/triangle.png" alt="triangle"/>

              </div>
              <div className="item active" onClick={()=>slideDirection(2)}>

                    <h3>advanced social engineering</h3>
                    <p>
                      Codefend uses sophisticated techniques to test your organization's human defenses, identifying vulnerabilities and providing insights to enhance security awareness and resilience.
                    </p>
                    <img src="../assets/images/triangle.png" alt="triangle" />

              </div>
              <div className="item" onClick={()=>slideDirection(3)}>

                  <h3>dark web, data leaks, leak clouds</h3>
                  <p>   
                    Codefend tracks data leaks and exposed information on the dark web. We identify and alert you to potential threats, ensuring your sensitive data remains secure.
                  </p>
                  <img src="../assets/images/triangle.png" alt="triangle" />

              </div>
            </div>
            <div style={{transform:'translateX(-100%)'}} className="slide-contain">
              <div className="contain" style={{
                backgroundImage:'url("../assets/images/img-services7.png")',
                '@media (max-width: 820px)': {
                  backgroundImage: 'url("../assets/images/img-services7.webp")',
                }
                
              }}>
                  <ul>
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
                  <ul>
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
                backgroundImage:'url("../assets/images/img-services5.png")',
                '@media (max-width: 820px)': {
                  backgroundImage: 'url("../assets/images/img-services5.webp")',
                }
              }}>
                  <ul>
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