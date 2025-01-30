const Occupation = ({t}) => {
    return (
            <div className="occupation-contain">
                    <p className="occupation-title">{t.title}</p>
                    <div className="bar_services">
                        <ul>
                            {
                                t.barItems.map((item, i)=> <li key={i}>{item}</li> )
                            }
                        </ul>
                        <div className="connections">
                            <span>{t.connections[0]}</span>
                            <hr />
                            <span>{t.connections[1]}</span>
                        </div>
                    </div>
                    <div className="occupation-price">
                        <span>{t.occupation_price.price}</span>
                        <div className="occupation-price_extra">
                            {t.occupation_price.priceText.map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </div>
                    </div>
            </div>
       
    )
}

export default Occupation;
