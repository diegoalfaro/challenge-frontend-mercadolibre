import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

import { ItemContextProvider } from "@hooks/item";

import "./Item.scss";

const MainContainer = React.lazy(
  () => import("@components/Grid/MainContainer")
);
const Slider = React.lazy(() => import("./components/Slider/Slider"));
const Description = React.lazy(
  () => import("./components/Description/Description")
);
const Breadcrumb = React.lazy(
  () => import("./components/Breadcrumb/Breadcrumb")
);
const ItemData = React.lazy(() => import("./components/ItemData/ItemData"));

const Item = () => {
  const { itemId } = useParams();

  return (
    <Suspense>
      <div className="item-page">
        <MainContainer>
          <ItemContextProvider itemId={itemId}>
            <Breadcrumb />
            <div className="item-details-container">
              <Slider />
              <ItemData />
              <Description />
            </div>
          </ItemContextProvider>
        </MainContainer>
      </div>
    </Suspense>
  );
};

export default Item;
