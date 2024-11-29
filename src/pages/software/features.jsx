const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="columned">
          <div
            className="column"
          >
            <div>
              <h3><b>Instant Reports</b></h3>
              <p>
                <strong>
                  Easy and fast reports:&nbsp;
                </strong>
                Filter vulnerabilities according to the type of resource and generate an on-demand report whenever you need it, ensuring actionable insights quickly.
              </p>
            </div>
            <img
              loading="lazy"
              src="/images/software-img2.png"
              alt="image of app"
            />
          </div>

          <div
            className="column"
          >
            <div>
              <h3><b>Vulnerabilities overview</b></h3>
              <p>
                <strong>Quick visualization of vulnerabilities:&nbsp;</strong>
                Easily monitor the criticality associated with each vulnerability, and see which ones are active and which are resolved.
              </p>
            </div>
            <img
              loading="lazy"
              src="/images/software-img3.png"
              alt="image of app"
              className="right"
            />
          </div>
        </div>
        <div className="columnota">
          <div
            className="column"
          >
            <div>
              <h3><b>Get all vulnerability details</b></h3>
              <p>
                <strong>
                Gain precise and actionable insights into every identified vulnerability,
                </strong>&nbsp;
                 including its technical description, potential business impact, remediation complexity, and recommended steps to resolve it effectively.
              </p>
            </div>
            <img
              loading="lazy"
              src="/images/software-img4.png"
              alt="image of app"
              className="right"
            />
          </div>
        </div>
        <div
          className="column"
        >
          <img
            loading="lazy"
            src="/images/software-img5.png"
            alt="image of app"
          />
          <div>
            <h3><b>Comply with Standards</b></h3>
            <p>
              <strong>Vulnerabilities:</strong>&nbsp;
              Filter vulnerabilities according to the type of resource and generate an on-demand report whenever you need it.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Features;
