const Enciclopedia = () => {
    return (
        <section class="enciclopedia">
            <div className="container">
                <div className="sidebar">
                    <div>
                        <h2>application bugs and vulnerabilities</h2>
                        <ul>
                            <li>cross-site scripting</li>
                            <li>cross-site request forgery</li>
                            <li>inyecciones de xpath</li>
                            <li>inyecciones de sql</li>
                        </ul>
                    </div>
                    <div>
                        <h2>techniques employeed by hackers</h2>
                        <ul>
                            <li>cash overflow</li>
                            <li>HTTP response splitting</li>
                            <li>cache poisoning</li>
                            <li>HTTP response splitting</li>
                            <li>cache poisoning</li>
                            <li>cash overflow</li>
                            <li>HTTP response splitting</li>
                            <li>cache poisoning</li>
                            <li>HTTP response splitting</li>
                            <li>cache poisoning</li>
                            <li>cash overflow</li>
                            <li>HTTP response splitting</li>
                        </ul>
                    </div>
                </div>
                <div className="enciclopedia_card">
                    <div className="card_content">
                        <div>
                            <h2>permanent infrastructure monitoring </h2>
                            <p>We believe security should be a run as process, we provide permanent survelliance instead of once in a year checks. Vulnerabilities found are notified on demand thru our plataform.</p>
                        </div>
                        <div>
                            <h2>express reporting</h2>
                            <p>Common security companies run scans once a year, instead we scan on daily basis, as well, we don’t waste a minute to communicate a flaw, we address issues as soon as we can.</p>
                        </div>
                        <button className="btn">
                            Analyze my Business
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Enciclopedia;