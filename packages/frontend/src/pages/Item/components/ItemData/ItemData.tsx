import React, { useContext } from "react";

import { ItemContext } from "@hooks/item";
import { getBuyURL, getItemDataHeaderInfo } from "@helpers/items";
import { currencyFormatter } from "@helpers/numbers";

import Skeleton from "./Skeleton";

import "./ItemData.scss";

const Button = React.lazy(() => import("@components/Button/Button"));

const Content = () => {
  const { loading, item } = useContext(ItemContext);

  const {
    title,
    condition,
    free_shipping: freeShipping,
    sold_quantity: soldQuantity,
    price,
  } = item || {};

  const dataHeader = getItemDataHeaderInfo({
    condition,
    soldQuantity,
    freeShipping,
  });

  const priceFormatted = price
    ? currencyFormatter(price?.currency, price?.decimals).format(price?.amount)
    : null;

  if (loading) {
    return <Skeleton />;
  }

  return (
    <>
      {dataHeader?.length > 0 && (
        <div className="item-details-data-header">
          {dataHeader.map((it, index) => (
            <span key={`data-header-item-${index}`}>{it}</span>
          ))}
        </div>
      )}
      {title && <h1 className="item-details-data-title">{title}</h1>}
      {priceFormatted && (
        <div className="item-details-data-price">{priceFormatted}</div>
      )}
    </>
  );
};

const BuyButton = () => {
  const { loading, item } = useContext(ItemContext);
  const { id } = item || {};

  const buyHandler = () => (window.location.href = getBuyURL(id).href);

  return (
    <Button disabled={loading} onClick={buyHandler}>
      Comprar
    </Button>
  );
};

const ItemData = () => {
  return (
    <div className="item-details-data">
      <Content />
      <BuyButton />
    </div>
  );
};

export default ItemData;
