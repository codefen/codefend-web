import css from "./steps.module.css";

const Steps = ({t}) => {
    return (
        <section className={css.steps}>
            <div className="container">
                <div className={css.steps_contain}>
                    <ul>
                        {
                            t.steps_contain.map((item, i)=>(<>
                                <li key={i}>
                                    <span>{item.number}</span>
                                    <div>
                                        <h2>{item.subtitle}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            </>))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Steps;