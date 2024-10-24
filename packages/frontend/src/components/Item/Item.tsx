import React from "react";
import { useNavigate } from "react-router-dom";

import Icon from "@components/Icon/Icon";
import { currencyFormatter } from "@helpers/numbers";

import { ReactComponent as Check } from "@assets/icons/check.svg";

import "./Item.scss";

interface ItemProps {
  id: number | string;
  title: string;
  price: number;
  imgSrc: string;
  place: string;
  validated?: boolean;
}

const Item = ({ id, title, imgSrc, price, place }: ItemProps) => {
  const navigate = useNavigate();
  const onClick = () => navigate(`/items/${id}`);

  const priceFormatted = currencyFormatter.format(price);

  return (
    <div className="item" onClick={onClick}>
      <img className="item-image" src={imgSrc} />
      <div className="item-grid">
        <div className="item-price">
          {priceFormatted}
          <Icon color="green" size={16}>
            <Check />
          </Icon>
        </div>
        <div className="item-title">{title}</div>
        <div className="item-place">{place}</div>
      </div>
    </div>
  );
};

export default Item;
