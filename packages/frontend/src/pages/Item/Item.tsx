import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

import { useItem } from "@hooks/item";
import Loader from "@components/Loader/Loader";
import { getItemBreadcrumb, getItemDataHeaderInfo } from "@helpers/items";

import "./Item.scss";
import { currencyFormatter } from "@helpers/numbers";
import { notNull } from "@helpers/commons";

const MainContainer = React.lazy(
  () => import("@components/Grid/MainContainer")
);
const Breadcrumb = React.lazy(
  () => import("@components/Breadcrumb/Breadcrumb")
);
const Slider = React.lazy(() => import("@components/Slider/Slider"));
const Button = React.lazy(() => import("@components/Button/Button"));

const maxQuantityOfSlides = 8;

const Item = () => {
  const { itemId } = useParams();
  const { loading, item, category } = useItem(itemId);

  const {
    title,
    description,
    condition,
    free_shipping: freeShipping,
    sold_quantity: soldQuantity,
    price,
  } = item || {};

  const breadcrumbItems = getItemBreadcrumb({ category, title });

  const dataHeader = getItemDataHeaderInfo({
    condition,
    soldQuantity,
    freeShipping,
  });

  const priceFormatted = price
    ? currencyFormatter(price?.currency, price?.decimals).format(price?.amount)
    : null;

  const buyHandler = () => console.log("¡Comprado!");

  return (
    <Suspense>
      <div className="item-page">
        <MainContainer>
          {!item || loading ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            <>
              <div className="breadcrumb-container">
                <Breadcrumb items={breadcrumbItems} />
              </div>
              <div className="item-details-container">
                <div className="item-details-slider-container">
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
                    slides={item?.pictures
                      ?.slice(0, maxQuantityOfSlides)
                      ?.map((imgSrc: string, index: number) => (
                        <img key={`slide-${index}`} src={imgSrc} />
                      ))}
                  />
                </div>
                <div className="item-details-data">
                  {dataHeader?.length && (
                    <div className="item-details-data-header">
                      {dataHeader.map((it, index) => (
                        <span key={`data-header-item-${index}`}>{it}</span>
                      ))}
                    </div>
                  )}
                  {title && (
                    <h1 className="item-details-data-title">{title}</h1>
                  )}
                  {priceFormatted && (
                    <div className="item-details-data-price">
                      {priceFormatted}
                    </div>
                  )}
                  <Button onClick={buyHandler}>Comprar</Button>
                </div>
                {description && (
                  <div className="item-details-description">
                    <h2 className="item-details-description-title">
                      Descripción del producto
                    </h2>
                    {description
                      ?.split("\n")
                      ?.filter(notNull)
                      ?.map((line: string, index: number) => (
                        <p
                          className="item-details-description-text"
                          key={`description-line-${index}`}
                        >
                          {line}
                        </p>
                      ))}
                  </div>
                )}
              </div>
            </>
          )}
        </MainContainer>
      </div>
    </Suspense>
  );
};

export default Item;
