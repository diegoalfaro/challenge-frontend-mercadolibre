import React, { useMemo } from "react";

import slide0 from "@assets/home/slider/slide_0.webp";
import slide1 from "@assets/home/slider/slide_1.webp";
import slide2 from "@assets/home/slider/slide_2.webp";
import slide3 from "@assets/home/slider/slide_3.webp";

import "./Slider.scss";

const Slider = React.lazy(() => import("@components/Slider/Slider"));

const Component = () => {
  const images = [slide0, slide1, slide2, slide3];

  const slides = useMemo(
    () =>
      images?.map((imgSrc: string, index: number) => (
        <img key={`slide-${index}`} src={imgSrc} />
      )),
    [images]
  );

  return (
    <div className="home-slider-container">
      <Slider
        className="home-slider"
        settings={{
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          variableWidth: true,
          adaptiveHeight: true,
        }}
        slides={slides}
      />
    </div>
  );
};

export default Component;
