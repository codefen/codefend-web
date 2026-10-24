import { Fragment } from "react";
import { servicesSlides2 } from "../../data/serviceSlides2";

const ServiceSlidesSection = ({ t }) => {
  return (
    // <>
    //   {
    //     servicesSlides.map((serviceSlide, i) => (
    //       <section key={serviceSlide.id} className={`section-${i + 1}`}>
    //         <div className="items">
    //           {serviceSlide.items.map((item, i) => (
    //               <div className={`item`}>
    //                 <h3>{item.title}</h3>
    //                 <p>{item.description}</p>
    //                 <img src={item.imgSrc} alt="triangle" />
    //               </div>
    //           ))}
    //         </div>
    //         <div
    //           className="slide-contain "
    //         >
    //           {serviceSlide.slides.map((slide, i) => (
    //               <div>
    //                 <ul>
    //                   <li>
    //                     <h3>MORE DETAILS:</h3>
    //                     <p>{slide.details}</p>
    //                   </li>
    //                   <li>
    //                     <h3>
    //                       <b>KEY BENEFITS:</b>
    //                     </h3>
    //                     <p>
    //                       {slide.benefits.map((benefit, i) => (
    //                         <Fragment key={i}>
    //                           - {benefit}
    //                           <br />
    //                         </Fragment>
    //                       ))}
    //                     </p>
    //                   </li>
    //                 </ul>
    //               </div>
    //           ))}
    //         </div>
    //       </section>
    //     ))
    //     };
    // </>
    <section className="sectionService">
      <div className="slide-contain ">
        {t.slides.map((item, i) => (
          <div
            className="contain"
            key={i}
            style={{
              backgroundImage: `url(${item.slide.bgImage})`,
            }}
          >
            <ul>
              <div className={`item`} key={i}>
                <h2>{item.subTitle.title}</h2>
                {/* <p>{item.subTitle.description}</p> */}
              </div>
              <li>
                <h3>{t.summary}</h3>
                <p>{item.subTitle.description}</p>
              </li>
              <li>
                <h3>{t.moreDetails}</h3>
                <p>{item.slide.details}</p>
              </li>
              <li>
                <h3>
                  <b>{t.keyBenefits}</b>
                </h3>
                <p>
                  {item.slide.benefits.map((benefit, i) => (
                    <Fragment key={i}>
                      - {benefit}
                      <br />
                    </Fragment>
                  ))}
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSlidesSection;
