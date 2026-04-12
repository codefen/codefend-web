import css from './section-2.module.css';
import { SearchIconSVG, LockIconSVG, AlertIconSVG, ChartIconSVG } from '../../components/HomeSVGIllustrations/HomeSVGIllustrations';

const ICONS = [SearchIconSVG, LockIconSVG, AlertIconSVG, ChartIconSVG];

const Section2 = ({t}) => {
    return (
        <section className={css.section_2}>
            <div className={css.container}>
                {t.items.map((item, index) => {
                    const Icon = ICONS[index % ICONS.length];
                    return (
                        <div key={index} className={css.card}>
                            <div className={css.card_icon}>
                                <Icon />
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Section2;
