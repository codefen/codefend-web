import css from './section-5.module.css';


const Section5 = () => {
    return (
        <section className={css.section_5}>
            <div className={css.container}>
                <div className={css.contain_slider}>
                    <ul className={css.header_slider}>
                        <li>resorces</li>
                        <li>issues</li>
                        <li>members</li>
                    </ul>
                    <div className={css.card_slider}>
                        <div className={css.items_slider}>
                            <div>
                                <h1>found issues</h1>
                                <div>
                                    <h2>1.1 lighting fast information survilliance.</h2>
                                    <p>Dynamic infrastructure supervision through a large and distributed network of professionals! Discover and fix vulnerabilities with unprecedented ease.</p>
                                </div>
                                <div>
                                    <h2>dynamic, actionable & content-rich reports</h2>
                                    <p>Informes dinamicos listos para imprimir en todo momento! Los informes pueden incluir contenido multimedia, para una comprensión simple y eficaz de la vulnerabilidad.</p>
                                </div>
                            </div>
                            <div>
                                <h1>found issues</h1>
                                <div>
                                    <h2>1.1 lighting fast information survilliance.</h2>
                                    <p>Dynamic infrastructure supervision through a large and distributed network of professionals! Discover and fix vulnerabilities with unprecedented ease.</p>
                                </div>
                                <div>
                                    <h2>dynamic, actionable & content-rich reports</h2>
                                    <p>Informes dinamicos listos para imprimir en todo momento! Los informes pueden incluir contenido multimedia, para una comprensión simple y eficaz de la vulnerabilidad.</p>
                                </div>
                            </div>
                            <div>
                                <h1>found issues</h1>
                                <div>
                                    <h2>1.1 lighting fast information survilliance.</h2>
                                    <p>Dynamic infrastructure supervision through a large and distributed network of professionals! Discover and fix vulnerabilities with unprecedented ease.</p>
                                </div>
                                <div>
                                    <h2>dynamic, actionable & content-rich reports</h2>
                                    <p>Informes dinamicos listos para imprimir en todo momento! Los informes pueden incluir contenido multimedia, para una comprensión simple y eficaz de la vulnerabilidad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/images/service-app-2.png" loading='lazy' alt="" />
            </div>
        </section>
    )
} 

export default Section5;