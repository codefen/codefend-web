import css from './section-2.module.css';


const Section2 = () => {
    return (
        <section className={css.section_2}>
            <div className={css.container}>
                <div>
                    <img src="/images/service-item-4.png" loading='lazy'  alt="" />
                    <h2>01. hackers search for vulnerabilities</h2>
                    <p>Professional hackers search for vulnerabilities in the defined scope, the research is conducted as a permanent proces. Vulnerabilities are detected and reported by individuals or teams.</p>
                </div>
                <div>
                    <img src="/images/service-item-5.png" loading='lazy' alt="" />
                    <h2>02. A vulnerability is identified!</h2>
                    <p>After some proper research, a vulnerability is identified by a meritful hacker and is tested in order to understand its risks and implications, </p>
                </div>
                <div>
                    <img src="/images/service-item-6.png" loading='lazy' alt="" />
                    <h2>03. vulnerability report is created</h2>
                    <p>Once all the information is collected, our content-rich vulnerability report is created, which may include media, attachments, proof of concepts and actionable data.</p>
                </div>
                <div>
                    <img src="/images/service-item-7.png" loading='lazy' alt="" />
                    <h2>04. vulnerability validation </h2>
                    <p>La vulnerabilidad es confirmada por un proceso de verificación de pares, realizado de forma interna por personal de codefen, cero porciento false positives</p>
                </div>
                <div>
                    <img src="/images/service-item-8.png" loading='lazy' alt="" />
                    <h2>05. vulnerability communication</h2>
                    <p>Después de ser validada por pares, la vulnerabilidad se comunica al instante para ser abordada y resuelta lo antes posible.</p>
                </div>
                <div>
                    <img src="/images/service-item-9.png" loading='lazy' alt="" />
                    <h2>06. vulnerability is fixed</h2>
                    <p>Resuelva de forma simple la vulnerabilidad, por medio de las indicaciones dadas. Si lo desea, puede pedir una revisión o ayuda desde la misma sección!</p>
                </div>
            </div>
        </section>
    )
} 

export default Section2;