import React, { useContext } from "react";

import { notNull } from "@helpers/commons";

import { ItemContext } from "@hooks/item";

import Skeleton from "./Skeleton";

import "./Description.scss";

const Description = () => {
  const { loading, item } = useContext(ItemContext);

  const { description } = item || {};

  if (loading) {
    return <Skeleton />;
  }

  if (loading) {
    return <Skeleton />;
  }

  if (description) {
    return (
      <div className="item-details-description">
        <h2 className="item-details-description-title">
          Descripción del producto
        </h2>
        {description
          ?.split("\n")
          ?.map((s: string) => s.trim())
          ?.filter(notNull)
          ?.map((line: string, index: number) => (
            <p
              className="item-details-description-text"
              key={`description-line-${index}`}
            >
              {line}
            </p>
          ))}
      </div>
    );
  }
};

export default Description;
