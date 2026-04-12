import css from "./section-1.module.css";
import { ShieldIconSVG, EyeIconSVG, NetworkIconSVG, ConsoleSVG } from "../../components/HomeSVGIllustrations/HomeSVGIllustrations";

const ICONS = [ShieldIconSVG, EyeIconSVG, NetworkIconSVG];

const Section1 = ({t}) => {
    return (
        <section className={css.section_1}>
            <div className={css.container}>
                <div className={css.items_contain}>
                    {t.items_contain.map((item, index) => {
                        const Icon = ICONS[index % ICONS.length];
                        return (
                            <div key={index} className={css.feature_card}>
                                <div className={css.icon_wrap}>
                                    <Icon />
                                </div>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={css.info_contain}>
                    <div className={css.info_text}>
                        <h1>{t.info_contain.title}</h1>
                        <span>{t.info_contain.span}</span>
                        <p>{t.info_contain.description}</p>
                    </div>
                    <div className={css.console_wrap}>
                        <ConsoleSVG />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;
