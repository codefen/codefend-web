import { complianceData } from "../../data"

const HeroCompliance = () => {
    return (
        <section className="herocompliance">
            <div className="container">
                <div className="subtitle">
                    <h2>Compliance and industry standars</h2>
                    <p>
                        Codefend offers cybersecurity intel, research, and security
                        services, all unified in a unique platform. Allowing you to monitor
                        your assets, infrastructure and your organization's security, while
                        establishing direct communication between our professionals and your
                        security team.
                    </p>
                </div>
            </div>
            <div className="container tarjetas">
                <input type="text" placeholder="search" />
                <div className="cards">
                    <div className="card_container">
                        {
                            complianceData[0].map((data) => {
                                return (
                                    <div key={data.title} className="card">
                                        <h3><b>{data.title}</b></h3>
                                        <p>{data.description1}
                                            <br />
                                            <br />
                                            {data.description2}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="card_container">
                        {
                            complianceData[1].map((data) => {
                                return (
                                    <div key={data.title} className="card">
                                        <h3><b>{data.title}</b></h3>
                                        <p>{data.description1}
                                            <br />
                                            <br />
                                            {data.description2}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div><div className="card_container">
                        {
                            complianceData[2].map((data) => {
                                return (
                                    <div key={data.title} className="card">
                                        <h3><b>{data.title}</b></h3>
                                        <p>{data.description1}
                                            <br />
                                            <br />
                                            {data.description2}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCompliance;