import { Fragment } from "react";
import { servicesSlides2 } from "../../data/serviceSlides2";
import {
  WebPentestSVG,
  MobilePentestSVG,
  NetworkPentestSVG,
  SourceCodeSVG,
  SocialEngineeringSVG,
  CloudSecuritySVG,
} from "../../components/ServiceIllustrations/ServiceIllustrations";
import css from "./serviceSlides.module.css";

const svgMap = [
  WebPentestSVG,
  MobilePentestSVG,
  NetworkPentestSVG,
  SourceCodeSVG,
  SocialEngineeringSVG,
  CloudSecuritySVG,
];

const ServiceSlidesSection = ({ t }) => {
  return (
    <section className={css.servicesSection}>
      <div className={css.slidesList}>
        {t.slides.map((item, i) => {
          const IllustrationSVG = svgMap[i] ?? WebPentestSVG;
          const isReversed = i % 2 !== 0;

          return (
            <div
              key={i}
              className={`${css.serviceRow} ${isReversed ? css.reversed : ""}`}
            >
              {/* Text column */}
              <div className={css.textCol}>
                <span className={css.serviceIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className={css.serviceTitle}>{item.subTitle.title}</h2>
                <p className={css.serviceDesc}>{item.subTitle.description}</p>

                <div className={css.detailsBlock}>
                  <h3 className={css.detailsLabel}>{t.moreDetails}</h3>
                  <p className={css.detailsText}>{item.slide.details}</p>
                </div>

                <div className={css.benefitsBlock}>
                  <h3 className={css.detailsLabel}>{t.keyBenefits}</h3>
                  <ul className={css.benefitsList}>
                    {item.slide.benefits.map((benefit, j) => (
                      <li key={j} className={css.benefitItem}>
                        <span className={css.benefitDot} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Illustration column */}
              <div className={css.illustrationCol}>
                <div className={css.illustrationWrap}>
                  <IllustrationSVG />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSlidesSection;
