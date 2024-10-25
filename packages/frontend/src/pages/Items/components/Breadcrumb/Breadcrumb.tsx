import React, { useContext } from "react";

import { ItemsSearchContext } from "@hooks/items-search";

import Skeleton from "./Skeleton";

import "./Breadcrumb.scss";

const Breadcrumb = React.lazy(
  () => import("@components/Breadcrumb/Breadcrumb")
);

const Content = () => {
  const { loading, categories } = useContext(ItemsSearchContext);

  const [category] = categories || ["Otros"];

  const breadcrumbItems = [
    { label: "Productos", href: "/" },
    { label: category, href: "/" },
  ];

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
