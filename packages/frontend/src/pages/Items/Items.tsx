import React, { Suspense, useEffect } from "react";

import { useItemsSearch } from "@hooks/items-search";
import Loader from "@components/Loader/Loader";

import "./Items.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

const MainContainer = React.lazy(
  () => import("@components/Grid/MainContainer")
);
const Breadcrumb = React.lazy(
  () => import("@components/Breadcrumb/Breadcrumb")
);
const Item = React.lazy(() => import("@components/Item/Item"));

const Items = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchValue = searchParams.get("search");
  const { loading, items, categories } = useItemsSearch(searchValue);

  useEffect(() => {
    if (!searchValue) {
      navigate("/");
    }
  }, [searchValue]);

  const [category] = categories || ["Otros"];

  const breadcrumbItems = [
    { label: "Productos", href: "/" },
    { label: category, href: "/" },
  ];

  return (
    <Suspense>
      <div className="items-page">
        <MainContainer>
          {!items?.length || loading ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            <>
              <div className="breadcrumb-container">
                <Breadcrumb items={breadcrumbItems} />
              </div>
              <div className="items-list-container">
                {items.map(
                  ({
                    id,
                    title,
                    price,
                    picture,
                    place,
                    free_shipping: freeShipping,
                  }) => (
                    <Item
                      key={`item-${id}`}
                      id={id}
                      title={title}
                      price={price}
                      imgSrc={picture}
                      place={place}
                      freeShipping={freeShipping}
                    />
                  )
                )}
              </div>
            </>
          )}
        </MainContainer>
      </div>
    </Suspense>
  );
};

export default Items;
