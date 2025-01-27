import css from "./section-1.module.css";

const Section1 = () => {
    return (
        <section className={css.section_1}>
            <div className={css.container}>
                <div className={css.items_contain}>
                    <div>
                        <div className={css.item_img}>
                            <img src="/images/service-item-1.png" alt="" />
                        </div>
                        <div>
                            <h2>web applications and services</h2>
                            <p>The review of web applications and services includes the audit of any service that uses web protocols, including web applications, APIs and websockets.</p>
                        </div>
                    </div>
                    <div>
                        <div className={css.item_img}>
                            <img src="/images/service-item-2.png" alt="" style={{
                                left: "10%",
                                top: "10%",
                            }}/>
                        </div>
                        <div>
                            <h2>mobile applications</h2>
                            <p>The analysis of mobile applications aims to detect vulnerabilities that may expose the user or the company in server application communication.</p>
                        </div>
                    </div>
                    <div>
                        <div className={css.item_img}>
                            <img src="/images/service-item-3.png" alt="" />
                        </div>
                        <div>
                            <h2>networks and servers</h2>
                            <p>Analysis of networks and external servers which are accessible from the web, detection of outdated services, firewalls, routers or network infrastructure with problems.</p>
                        </div>
                    </div>
                </div>
                <div className={css.info_contain}>
                    <div>
                        <h1>permanent supervision</h1>
                        <span>early detection and monitoring of vulnerabilities</span>
                        <p>Monitor and detect vulnerabilities and changes in your organization's digital resources. Monitoring web applications in real time. Periodic analysis of your applications and detection of vulnerabilities.</p>
                    </div>
                    <img src="/images/supervicion.png" alt="" />
                </div>
            </div>
        </section>
    )
} 

export default Section1;