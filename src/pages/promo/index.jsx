
import Occupation from "./occupation";
import Probability from "./probability";

const Promo = () => {
    const handleSlider = (event) => {
        const idButton = event.target.id
        const sliderPromo = document.querySelector('.promo_slider')
        let transformValue = idButton === 'slider-after' ? `translateX(-50%)` : `translateX(0%)`;
        sliderPromo.style.transform = transformValue
    }
    return (
        <> 
            {/* <DocumentMetadata
              meta={pageComplianceMetaData({
                title: t("promo.metadata.title"),
                description: t("promo.metadata.description"),
              })}
            /> */}
            <section className="promo">
                <div className="containers">
                    <div className="buttons-contain">
                        <button onClick={handleSlider} className="handle_slider" id="slider-before">&lt;</button>
                        <button onClick={handleSlider} className="handle_slider" id="slider-after">&gt;</button>
                    </div>
                    <div className="promo_slider">
                        <Occupation />
                        <Probability />
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default Promo;
