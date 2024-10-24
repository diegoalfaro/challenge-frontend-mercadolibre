import React from "react";
import Slider, { Settings } from "react-slick";

import "./Slider.scss";

const Component = ({
  settings,
  slides,
  ...props
}: {
  className?: string;
  settings: Settings;
  slides: React.ReactElement[];
}) => {
  return (
    <Slider {...settings} {...props}>
      {slides}
    </Slider>
  );
};

export default Component;
