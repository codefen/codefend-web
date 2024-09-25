import { capabilities } from "../../data/index.js";

const Capabilities = () => {
  return (
    <section className="capabilities">
      <div className="container">
        <h2>System capabilities</h2>
        <div className="box">
          <p className="first-p">
            <b>scope / attack surface definition:</b>
            <br />
            The application counts with 6 different modules exclusively
            dedicated to scope and attack surface. Each one of this modules
            corresponds with an unique type of asset to be pentested / scoped.
            For example, if you only desire to check your web and mobile
            applications, you can leave the rest of the scope unfilled.
          </p>
          <div className="box-child">
            {capabilities[0].map((item) => {
              return (
                <div key={item.title} className="item">
                  <p>
                    <b>{item.title}</b>
                    <br />
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="box">
          <p className="first-p">
            <b> Communication and Reporting:</b>
            <br />
            The application encompasses 3 specialized modules designed to
            streamline communication and reporting for your pentesting needs.
            Each module serves a distinct purpose to enhance your experience and
            efficiency in managing security assessments.
          </p>
          <div className="box-child">
            {capabilities[1].map((item) => {
              return (
                <div key={item.title} className="item">
                  <p>
                    <b>{item.title}</b>
                    <br />
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
