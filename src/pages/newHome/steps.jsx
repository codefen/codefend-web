import css from "./steps.module.css";

const Steps = () => {
    return (
        <section className={css.steps}>
            <div className="container">
                <div className={css.steps_contain}>
                    <ul>
                        <li>
                            <span>1</span>
                            <div>
                                <h2>complete the online sign up form</h2>
                                <p>complete the form with your details</p>
                            </div>
                        </li>
                        <li>
                            <span>2</span>
                            <div>
                                <h2>choose the right membership</h2>
                                <p>100% online and hassle-free</p>
                            </div>
                        </li>
                        <li>
                            <span>3</span>
                            <div>
                                <h2>receive actionable reports online</h2>
                                <p>obtain peer-verified issues to inbox</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Steps;