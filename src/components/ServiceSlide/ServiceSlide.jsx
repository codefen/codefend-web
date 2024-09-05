import SlideItem from "./ServiceSlideItem";
import SlideContent from "./ServiceSlideContent";
import { useCallback, useState } from "react";

const ServiceSlide = ({ serviceSlide }) => {
  const [active, setActiveSlide] = useState(0);
  const onChangeItem = useCallback(
    (updated) => {
      setActiveSlide(updated);
    },
    [active]
  );
  return (
    <>
      <div className="items">
        {serviceSlide.items.map((item, i) => (
          <SlideItem
            key={item.id}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
            onClick={() => onChangeItem(i)}
            isActive={active === i}
          />
        ))}
      </div>
      <div
        className="slide-contain "
        style={{ transform: `translateX(${active * -100}%)` }}
      >
        {serviceSlide.slides.map((slide, i) => (
          <SlideContent
            key={slide.id}
            bgImage={slide.bgImage}
            bgImageMedia={slide.bgImageMedia}
            details={slide.details}
            benefits={slide.benefits}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceSlide;
