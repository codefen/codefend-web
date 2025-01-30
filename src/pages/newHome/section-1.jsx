import css from "./section-1.module.css";

const Section1 = ({t}) => {
    return (
        <section className={css.section_1}>
            <div className={css.container}>
                <div className={css.items_contain}>
                    {t.items_contain.map((item, index) => (
                        <div key={index}>
                            <div className={css.item_img}>
                                <img 
                                    src={item.img.src} 
                                    alt={item.img.alt} 
                                    loading={item.img.loading} 
                                    style={index === 1 ? { left: "10%", top: "10%" } : {}}
                                />
                            </div>
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={css.info_contain}>
                    <div>
                        <h1>{t.info_contain.title}</h1>
                        <span>{t.info_contain.span}</span>
                        <p>{t.info_contain.description}</p>
                    </div>
                    <img 
                        src={t.info_contain.img.src} 
                        alt={t.info_contain.img.alt} 
                        loading={t.info_contain.img.loading} 
                    />
                </div>
            </div>
        </section>
    )
} 

export default Section1;