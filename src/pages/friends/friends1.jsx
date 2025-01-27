import { team } from "../../data";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FirstSlider from "./components/firstSlider";

const Friends1 = ({ t }) => {
  return (
    <section className="friends1">
      <FirstSlider t={t.slider1} />
    </section>
  );
};

export default Friends1;
