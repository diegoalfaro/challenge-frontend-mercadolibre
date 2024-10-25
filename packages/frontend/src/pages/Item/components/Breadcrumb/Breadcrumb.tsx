import React, { useContext } from "react";

import { ItemContext } from "@hooks/item";
import { getItemBreadcrumb } from "@helpers/items";

import Skeleton from "./Skeleton";

import "./Breadcrumb.scss";

const Breadcrumb = React.lazy(
  () => import("@components/Breadcrumb/Breadcrumb")
);

const Content = () => {
  const { loading, item, category } = useContext(ItemContext);

  const { title } = item || {};

  const breadcrumbItems = getItemBreadcrumb({ category, title });

  if (loading) {
    return <Skeleton />;
  }

  if (breadcrumbItems?.length > 0) {
    return <Breadcrumb items={breadcrumbItems} />;
  }
};

const Component = () => {
  return (
    <div className="breadcrumb-container">
      <Content />
    </div>
  );
};

export default Component;
