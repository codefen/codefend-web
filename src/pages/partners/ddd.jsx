import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DDD() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed: 2000,
      easing:'linear'
    }

    return (
      <div className="pruebaslider">
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className="pruebaitem">
            <h3>1</h3>
          </div>
          <div className="pruebaitem">
            <h3>2</h3>
          </div>
          <div className="pruebaitem">
            <h3>3</h3>
          </div>
          <div className="pruebaitem">
            <h3>4</h3>
          </div>
          <div className="pruebaitem">
            <h3>5</h3>
          </div>
          <div className="pruebaitem">
            <h3>6</h3>
          </div>
          <div className="pruebaitem">
            <h3>7</h3>
          </div>
          <div className="pruebaitem">
            <h3>8</h3>
          </div>
          <div className="pruebaitem">
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
