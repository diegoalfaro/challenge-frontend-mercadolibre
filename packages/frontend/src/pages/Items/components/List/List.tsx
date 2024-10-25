import React, { useContext } from "react";

import { ItemsSearchContext } from "@hooks/items-search";

import Skeleton from "./Skeleton";

import "./List.scss";

const Item = React.lazy(() => import("@components/Item/Item"));

const Content = () => {
  const { loading, items } = useContext(ItemsSearchContext);

  if (loading) {
    return (
      <>
        {[...Array(4)].map((_, i) => (
          <Skeleton key={`skeleton-${i}`} />
        ))}
      </>
    );
  }

  if (items?.length > 0) {
    return (
      <>
        {items.map(({ id, title, price, picture, store_name }) => (
          <Item
            key={`item-${id}`}
            id={id}
            title={title}
            price={price}
            imgSrc={picture}
            officialStore={store_name}
          />
        ))}
      </>
    );
  }
};

const List = () => {
  return (
    <div className="items-list-container">
      <Content />
    </div>
  );
};

export default List;
