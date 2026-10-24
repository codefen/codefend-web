import css from './section-2.module.css';


const Section2 = ({t}) => {
    return (
        <section className={css.section_2}>
            <div className={css.container}>
                {t.items.map((item, index) => (
                    <div key={index}>
                        <img src={item.img.src} loading={item.img.loading} alt={item.img.alt} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
} 

export default Section2;