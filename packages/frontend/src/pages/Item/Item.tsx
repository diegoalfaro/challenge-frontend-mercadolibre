import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

import { useItem } from "@hooks/item";
import Loader from "@components/Loader/Loader";

import "./Item.scss";

const MainContainer = React.lazy(
  () => import("@components/Grid/MainContainer")
);
const Breadcrumb = React.lazy(
  () => import("@components/Breadcrumb/Breadcrumb")
);

const Item = () => {
  const { itemId } = useParams();
  const { loading, item } = useItem(itemId);
  const { title } = item || {};

  const breadcrumbItems = [
    { label: "Productos", href: "/" },
    { label: title, href: "/" },
  ];

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
              <div className="item-details-container"></div>
            </>
          )}
        </MainContainer>
      </div>
    </Suspense>
  );
};

export default Item;
