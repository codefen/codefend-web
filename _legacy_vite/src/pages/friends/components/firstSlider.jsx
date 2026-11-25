import { team } from "../../../data";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useSliderTeam from "../../../hooks/sliderTeam";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useMemo } from "react";

const breakPoints = {
  2300: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  2000: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1550: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  850: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  200: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
};

const FirstSlider = ({ t }) => {
  const { indexActive, handleSlide, selectCard } = useSliderTeam("slider-1");
  const profiles = useMemo(() => {
    const { chris, edgardo, miguel, ignacio } = t.profiles;
    return [chris, edgardo, miguel, ignacio];
  }, [t.profiles]);
  return (
    <div id="slider-1" className="container-1">
      <div className="profile-contain">
        {profiles.map((profile) => (
          <div key={profile.id} id={profile.id} className="profile">
            <img
              src={profile.img}
              alt={profile.alt}
              loading="lazy"
              decoding="async"
              itemProp="image"
            />

            <div className="information">
              <h2>{profile.name}</h2>
              <span>{profile.position}</span>
              <div className="text">
                <h3>{profile.professionalSummaryTitle}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: profile.professionalSummary,
                  }}
                ></p>
                {profile?.keyAchievementsTitle && (
                  <h3>{profile.keyAchievementsTitle}</h3>
                )}
                {profile?.keyAchievements && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: profile.keyAchievements,
                    }}
                  ></p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstSlider;
