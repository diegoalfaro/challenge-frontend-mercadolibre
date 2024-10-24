import React from "react";

import "./Breadcrumb.scss";
import { NavLink } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  SeparatorComponent?: () => React.ReactElement;
  ItemComponent?: (props: BreadcrumbItemProps) => React.ReactElement;
  items: BreadcrumbItem[];
}

interface BreadcrumbItemProps {
  active: boolean;
  item: BreadcrumbItem;
}

const DefaultSeparatorComponent = () => (
  <span className="breadcrumb-separator">/</span>
);

const DefaultItemComponent = ({ active, item }: BreadcrumbItemProps) =>
  active ? (
    <NavLink className="breadcrumb-item" to={item.href}>
      {item.label}
    </NavLink>
  ) : (
    <a className="breadcrumb-item" aria-current="page">
      {item.label}
    </a>
  );

const Breadcrumb = ({
  items,
  SeparatorComponent = DefaultSeparatorComponent,
  ItemComponent = DefaultItemComponent,
}: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      {items.flatMap((item, index, array) => {
        const active = index <= array.length - 2;
        return index > 0
          ? [
              <SeparatorComponent key={`separator-${index}`} />,
              <ItemComponent
                key={`item-${index}`}
                active={active}
                item={item}
              />,
            ]
          : [
              <ItemComponent
                key={`item-${index}`}
                active={active}
                item={item}
              />,
            ];
      })}
    </nav>
  );
};

export default Breadcrumb;
