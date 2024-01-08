import React from "react";
import Section1 from "./section-1";
import Section2 from "./section-2";
import Section3 from "./section-3";

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="subtitle">
            <h2>services</h2>
            <p>
            Codefend offers cybersecurity intel, research, and security services, all unified in a unique platform. Allowing you to monitor your assets, infrastructure and your organization's security, while establishing direct communication between our professionals and your security team.
            </p>
          </div>
        </div>
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Services;
