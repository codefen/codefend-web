import css from './section-4.module.css';
import img from "/images/check-red.png";


const Section4 = ({t}) => {
    return (
        <section className={css.section_4}>
          <div className={css.container}>
            {t.container.cards.map((card, index) => (
              <div className={css.card} key={index}>
                <h2>{card.title}</h2>
                <span className={css.card_subtitle}>{card.subtitle}</span>
                <div className={css.card_price}>
                  <span>{card.price.amount}</span>
                  <p>
                    <span>{card.price.billing.monthly}</span> {card.price.billing.yearly}
                  </p>
                </div>
                <ul>
                  {card.features.map((feature, idx) => (
                    <li key={idx}>
                      <img src={img} loading="lazy" alt="check icon" /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn">{card.button}</button>
              </div>
            ))}
          </div>
        </section>
    )
} 

export default Section4;