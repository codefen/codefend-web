const Probability = ({t}) => {
    return (
            <div className="probability-contain">
                    <h2>{t.title}</h2>
                    <div className="probability_cards">
                        <div className="probability_card_1">
                                <div className="percentage">                     
                                    <span>{t.probability_cards.probability_card_1.percentege.number}</span>                           
                                    <p>{t.probability_cards.probability_card_1.percentege.description}</p>
                                </div>
                                <img src={t.probability_cards.probability_card_1.img.src} alt={t.probability_cards.probability_card_1.img.alt} />
                                <span className="link-page">{t.probability_cards.probability_card_1.link}</span>
                        </div>
                        <div className="probability_card_2">
                            {
                                t.probability_cards.probability_card_2.items.map((item)=>{
                                    return <div className="item-content">
                                        <img src={item.img.src} loading={item.img.loading} alt={item.img.alt} />
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <button className="btn">{t.button.text}</button>
            </div>
    )
}

export default Probability;