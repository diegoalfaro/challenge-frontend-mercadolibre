import React, { Suspense, useContext } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ItemContext, ItemContextProvider } from "@hooks/item";

import "./Item.scss";
import { useTranslation } from "react-i18next";

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

const Meta = () => {
  const { t } = useTranslation();
  const { item } = useContext(ItemContext);
  const { title } = item || {};

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={t("item.description", { title })} />
    </Helmet>
  );
};

const Item = () => {
  const { itemId } = useParams();

  return (
    <Suspense>
      <ItemContextProvider itemId={itemId}>
        <Meta />
        <div className="item-page">
          <MainContainer>
            <Breadcrumb />
            <div className="item-details-container">
              <Slider />
              <ItemData />
              <Description />
            </div>
          </MainContainer>
        </div>
      </ItemContextProvider>
    </Suspense>
  );
};

export default Item;
