import css from './newHero.module.css';


const NewHero = () => {
    return (
        <section className={css.new_hero}>
            <div className="container">
                <div className={css.hero_title}>
                    <h1>survelliance services</h1>
                    <span>100% online & hassle-free end-point & data protection</span>
                </div>
            </div>
        </section>
    )
} 

export default NewHero;