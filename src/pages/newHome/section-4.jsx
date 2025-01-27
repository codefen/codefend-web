import css from './section-4.module.css';
import img from "/images/check-red.png";


const Section4 = () => {
    return (
        <section className={css.section_4}>
            <div className={css.container}>
                <div className={css.card}>
                    <h2>basic protection</h2>
                    <span className={css.card_subtitle}>has your wordpress been hacked</span>
                    <div className={css.card_price}>
                        <span>$150</span>
                        <p><span>monthly billed</span> or $1,119 yearly</p>
                    </div>
                    <ul>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> automated vulnerabity scans{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> periodic system supervision{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> malware detection {" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> ransomware protection ✓{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> dedicated technical support{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> cancelation at any time{" "}
                        </li>
                    </ul>
                    <button className='btn'>start membership</button>
                </div>
                <div className={css.card}>
                    <h2>basic protection</h2>
                    <span className={css.card_subtitle}>has your wordpress been hacked</span>
                    <div className={css.card_price}>
                        <span>$450</span>
                        <p><span>monthly billed</span> or $1,119 yearly</p>
                    </div>
                    <ul>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> Platform access{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> Automated scan{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> Custom scan{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> Basic Manual testing ✓{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> Frecuency: one single
                        scan{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> Deliverables: 1 single
                        report{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> Service duration: 4
                        weeks{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> Scope / attack surface:
                        small{" "}
                        </li>
                    </ul>
                    <button className='btn'>start membership</button>
                </div>
                <div className={css.card}>
                    <h2>advance protection</h2>
                    <span className={css.card_subtitle}>multiple domains</span>
                    <div className={css.card_price}>
                        <span>$1,350</span>
                        <p><span>monthly billed</span> or $1,119 yearly</p>
                    </div>
                    <ul>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> automated vulnerabity scans{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> periodic system supervision{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> malware detection {" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> ransomware protection ✓{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> dedicated technical support{" "}
                        </li>
                        <li>
                        <img src={img} loading='lazy' alt="check icon" /> cancelation at any time{" "}
                        </li>
                    </ul>
                    <button className='btn'>start membership</button>
                </div>
            </div>
        </section>
    )
} 

export default Section4;