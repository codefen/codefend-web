import css from './section-3.module.css';
import { SOCDashboardSVG } from '../../components/HomeSVGIllustrations/HomeSVGIllustrations';

const Section3 = ({t}) => {
    return (
        <section className={css.section_3}>
            <div className={css.container}>
                <div className={css.visual_col}>
                    <SOCDashboardSVG />
                </div>
                <div className={css.section_card}>
                    {t.section_card.items.map((item, index) => (
                        <div key={index} className={css.card_item}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                    <button className='btn'>{t.section_card.button}</button>
                </div>
            </div>
        </section>
    );
}

export default Section3;
