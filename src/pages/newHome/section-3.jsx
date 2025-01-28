import css from './section-3.module.css';


const Section3 = () => {
    return (
        <section className={css.section_3}>
            <div className={css.container}>
              <img src="/images/service-app.png" loading='lazy' alt="" />  
              <div className={css.section_card}>
                    <div>
                        <h2>permanent infrastructure monitoring </h2>
                        <p>We believe security should be a run as process, we provide permanent survelliance instead of once in a year checks. Vulnerabilities found are notified on demand thru our plataform.</p>
                    </div>
                    <div>
                        <h2>express reporting</h2>
                        <p>Common security companies run scans once a year, instead we scan on daily basis, as well, we don’t waste a minute to communicate a flaw, we address issues as soon as we can.</p>
                    </div>
                    <button className='btn'>
                        Analyze my Business
                    </button>
                </div>
            </div>
        </section>
    )
} 

export default Section3;