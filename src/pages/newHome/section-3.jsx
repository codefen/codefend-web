import css from './section-3.module.css';


const Section3 = ({t}) => {
    return (
        <section className={css.section_3}>
            <div className={css.container}>
                <img src={t.img.src} loading={t.img.loading} alt={t.img.alt} />
                <div className={css.section_card}>
                    {t.section_card.items.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                    <button className='btn'>
                        {t.section_card.button}
                    </button>
                </div>
            </div>
        </section>
    )
} 

export default Section3;