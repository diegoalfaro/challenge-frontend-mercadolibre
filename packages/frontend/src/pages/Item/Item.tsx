import React, { Suspense } from "react";

import "./Item.scss";

const MainContainer = React.lazy(
  () => import("@components/Grid/MainContainer")
);
const Breadcrumb = React.lazy(
  () => import("@components/Breadcrumb/Breadcrumb")
);

const Item = () => {
  const breadcrumbItems = [
    { label: "Computadoras", href: "/" },
    { label: "Computadoras", href: "/" },
    { label: "Computadoras", href: "/" },
    { label: "Computadoras", href: "/" },
  ];

  return (
    <Suspense>
      <div className="item-page">
        <MainContainer>
          <div className="breadcrumb-container">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="item-details-container"></div>
        </MainContainer>
      </div>
    </Suspense>
  );
};

export default Item;
