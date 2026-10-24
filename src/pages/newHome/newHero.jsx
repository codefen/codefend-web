import css from './newHero.module.css';


const NewHero = ({t}) => {
    return (
        <section className={css.new_hero}>
            <div className="container">
                <div className={css.hero_title}>
                    <h1>{t.title}</h1>
                    <span>{t.description}</span>
                </div>
            </div>
        </section>
    )
} 

export default NewHero;