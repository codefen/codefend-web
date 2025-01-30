import css from './section-5.module.css';


const Section5 = ({t}) => {
    return (
        <section className={css.section_5}>
            <div className={css.container}>
                <div className={css.contain_slider}>
                    <ul className={css.header_slider}>
                    {t.tabs.map((tab, index) => (
                        <li key={index}>{tab}</li>
                    ))}
                    </ul>
                    <div className={css.card_slider}>
                    <div className={css.items_slider}>
                        {t.content.map((category, index) => (
                        <div key={index}>
                            <h1>{category.title}</h1>
                            {category.items.map((item, idx) => (
                            <div key={idx}>
                                <h2>{item.heading}</h2>
                                <p>{item.description}</p>
                            </div>
                            ))}
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                <img src={t.image.src} loading={t.image.loading} alt={t.image.alt} />
            </div>
        </section>
    )
} 

export default Section5;