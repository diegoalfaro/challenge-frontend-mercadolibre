import React, { Suspense } from "react";

import { useItemsSearch } from "@hooks/items-search";
import Loader from "@components/Loader/Loader";

import "./Items.scss";
import { useSearchParams } from "react-router-dom";

const MainContainer = React.lazy(
  () => import("@components/Grid/MainContainer")
);
const Breadcrumb = React.lazy(
  () => import("@components/Breadcrumb/Breadcrumb")
);
const Item = React.lazy(() => import("@components/Item/Item"));

const Items = () => {
  const [searchParams] = useSearchParams();
  const { loading, items } = useItemsSearch(searchParams.get("search"));

  const breadcrumbItems = [
    { label: "Computadoras", href: "/" },
    { label: "Computadoras", href: "/" },
    { label: "Computadoras", href: "/" },
    { label: "Computadoras", href: "/" },
  ];

  return (
    <Suspense>
      <div className="items-page">
        <MainContainer>
          {loading ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            <>
              <div className="breadcrumb-container">
                <Breadcrumb items={breadcrumbItems} />
              </div>
              <div className="items-list-container">
                {items.map(({ id, title, price, imgSrc, place }) => (
                  <Item
                    key={`item-${id}`}
                    id={id}
                    title={title}
                    price={price}
                    imgSrc={imgSrc}
                    place={place}
                  />
                ))}
              </div>
            </>
          )}
        </MainContainer>
      </div>
    </Suspense>
  );
};

export default Items;
