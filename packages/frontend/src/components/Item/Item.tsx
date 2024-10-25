import React from "react";
import { useNavigate } from "react-router-dom";

import Icon from "@components/Icon/Icon";
import { currencyFormatter } from "@helpers/numbers";
import * as theme from "@theme/theme.module.scss";

import { ReactComponent as CircleCheck } from "@assets/icons/circle-check.svg";

import "./Item.scss";

interface ItemProps {
  id: number | string;
  title: string;
  price: {
    currency: string;
    decimals: number;
    amount: number;
  };
  imgSrc: string;
  officialStore?: string;
}

const Item = ({ id, title, imgSrc, price, officialStore }: ItemProps) => {
  const navigate = useNavigate();
  const onClick = () => navigate(`/items/${id}`);

  const priceFormatted = currencyFormatter(
    price.currency,
    price.decimals
  ).format(price.amount);

  return (
    <div className="item" onClick={onClick}>
      <img className="item-image" src={imgSrc} />
      <div className="item-grid">
        <div className="item-price">
          {priceFormatted}
          {officialStore && (
            <Icon color={theme.successColor} size={16}>
              <CircleCheck />
            </Icon>
          )}
        </div>
        <div className="item-title">{title}</div>
        <div className="item-place">{officialStore}</div>
      </div>
    </div>
  );
};

export default Item;
