import { useState } from 'react';
import css from './section-5.module.css';
import { ProductUISVG } from '../../components/HomeSVGIllustrations/HomeSVGIllustrations';

const Section5 = ({t}) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={css.section_5}>
            <div className={css.container}>
                <div className={css.contain_slider}>
                    <ul className={css.header_slider}>
                        {t.tabs.map((tab, index) => (
                            <li
                                key={index}
                                className={activeTab === index ? css.active_tab : ''}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                    <div className={css.card_slider}>
                        {t.content[activeTab] && (
                            <div className={css.tab_content}>
                                <h1>{t.content[activeTab].title}</h1>
                                {t.content[activeTab].items.map((item, idx) => (
                                    <div key={idx} className={css.tab_item}>
                                        <h2>{item.heading}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className={css.visual_col}>
                    <ProductUISVG />
                </div>
            </div>
        </section>
    );
}

export default Section5;
