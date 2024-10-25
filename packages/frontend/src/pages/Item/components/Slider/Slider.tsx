import React, { useContext, useMemo } from "react";

import { ItemContext } from "@hooks/item";

import Skeleton from "./Skeleton";

import "./Slider.scss";

const Slider = React.lazy(() => import("@components/Slider/Slider"));

const maxQuantityOfSlides = 8;

const Content = () => {
  const { loading, item } = useContext(ItemContext);

  const slides = useMemo(
    () =>
      item?.pictures
        ?.slice(0, maxQuantityOfSlides)
        ?.map((imgSrc: string, index: number) => (
          <img key={`slide-${index}`} src={imgSrc} />
        )),
    [item?.pictures]
  );

  if (loading) {
    return <Skeleton />;
  }

  if (slides?.length > 0) {
    return (
      <Slider
        className="item-details-slider"
        settings={{
          arrows: false,
          dots: true,
          infinite: false,
          slidesToShow: 1,
          variableWidth: true,
          adaptiveHeight: true,
        }}
        slides={slides}
      />
    );
  }
};

const Component = () => {
  return (
    <div className="item-details-slider-container">
      <Content />
    </div>
  );
};

export default Component;
