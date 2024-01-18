
const Section2 = () => {
  function slideDirection(number) {
    const slide2 = document.querySelector(".section-2 .slide-contain");
    // const slides = document.querySelectorAll(".section-2 .slide-contain .contain");
    const slideItems2 = document.querySelectorAll(".section-2 .items .item");
    const transformValue = `translateX(${(number - 1) * -100}%)`;

    // Setear la clase "active" al slide correspondiente
    slideItems2.forEach((item, index) => {
      item.classList.toggle("active", index + 1 === number);
    });

    // Mover el contenedor de los slides
    slide2.style.transform = transformValue;
  }

  return (
    <section className="section-2">
      <div className="items">
        <div
          className="item"
        
          onClick={(e) => slideDirection(1)}
        >
          <h3>internal network pentest</h3>
          <p>
            Codefend does manual and semi-automated penetration testing
            processes using commercial and proprietary security software to
            evaluate your web application from the perspective of anonymous and
            authenticated users.
          </p>
          <img src="../../public/assets/images/triangle.png" alt="triangle" />
        </div>
        <div className="item active" onClick={() => slideDirection(2)}>
          <h3>external network pentest</h3>
          <p>
            Codefend does manual and semi-automated penetration testing
            processes using commercial and proprietary security software to
            evaluate your web application from the perspective of anonymous and
            authenticated users.
          </p>
          <img src="../../public/assets/images/triangle.png" alt="triangle" />
        </div>
        <div className="item" onClick={() => slideDirection(3)}>
          <h3>source code review</h3>
          <p>
            Codefend does manual and semi-automated penetration testing
            processes using commercial and proprietary security software to
            evaluate your web application from the perspective of anonymous and
            authenticated users.
          </p>
          <img src="../../public/assets/images/triangle.png" alt="triangle" />
        </div>
      </div>
      <div
        style={{ transform: "translateX(-200%)" }}
        className="slide-contain"
      >
        <div
          className="contain"
          style={{
            backgroundImage:
              'url("../../public/assets/images/img-services7.png")',
          }}
        >
          <h2>SERVICES: INTERNAL NETWORK PENTEST</h2>

          <ul>
            <li>
              <h3>
                <b>SUMMARY</b>
              </h3>
              <p>
                Codefend does manual and semi-automated penetration testing
                processes using commercial and proprietary security software to
                evaluate your web application from the perspective of an
                attacker
              </p>
            </li>
            <li>
              <h3>MORE DETAILS:</h3>
              <p>
                Our internal network penetration testing simulates real-world
                attacks originating from within your organization. This
                assessment helps evaluate the effectiveness of internal security
                controls and identifies vulnerabilities that may be exploited by
                insiders or malicious actors.
              </p>
            </li>
            <li>
              <h3>
                <b>KEY BENEFITS</b>
              </h3>
              <p>
                - Simulates real-world internal attack scenarios. <br />
                - Evaluates internal security controls effectively. <br />-
                Identifies vulnerabilities exploitable by insiders.
              </p>
            </li>
          </ul>
        </div>
        <div
          className="contain"
          style={{
            backgroundImage:
              'url("../../public/assets/images/img-services6.png")',
          }}
        >
          <h2>CODEFEND SERVICES: EXTERNAL NETWORK PENTESTSUMMARY</h2>

          <ul>
            <li>
              <h3>
                <b>SUMMARY:</b>
              </h3>
              <p>
                Codefend does manual and semi-automated penetration testing
                processes using commercial and proprietary security software to
                evaluate your web application from the perspective of an
                attacker.
              </p>
            </li>
            <li>
              <h3>MORE DETAILS:</h3>
              <p>
                Codefend conducts external network penetration tests to assess
                the security of your perimeter defenses. Through simulated
                attacks from an external perspective, we identify
                vulnerabilities and potential points of entry to fortify your
                external network security.
              </p>
            </li>
            <li>
              <h3>
                <b>KEY BENEFITS</b>
              </h3>
              <p>
                - Assesses and fortifies perimeter defense effectiveness. <br />
                - Identifies external vulnerabilities and entry points. <br />-
                Enhances overall security against external threats.
              </p>
            </li>
          </ul>
        </div>
        <div className="contain">
          <h2>SOURCE CODE REVIEW:</h2>

          <ul>
            <li>
              <h3>
                <b>SUMMARY</b>
              </h3>
              <p>
                Codefend does manual and semi-automated penetration testing
                processes using commercial and proprietary security software to
                evaluate your web application from the perspective of an
                attacker.
              </p>
            </li>
            <li>
              <h3>MORE DETAILS:</h3>
              <p>
                Codefend offers source code review services to thoroughly
                examine your application's source code for security
                vulnerabilities. Our experts provide in-depth analysis to
                identify and address potential security issues, ensuring the
                integrity of your software.
              </p>
            </li>
            <li>
              <h3>
                <b>KEY BENEFITS:</b>
              </h3>
              <p>
                - Thoroughly examines and secures application source code.{" "}
                <br />
                - Identifies and addresses potential security issues. <br />-
                Ensures the integrity and security of software.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section2;
