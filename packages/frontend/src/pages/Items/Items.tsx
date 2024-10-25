import React, { Suspense, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  ItemsSearchContextProvider,
  useItemsSearch,
} from "@hooks/items-search";

import "./Items.scss";

const MainContainer = React.lazy(
  () => import("@components/Grid/MainContainer")
);
const Breadcrumb = React.lazy(
  () => import("./components/Breadcrumb/Breadcrumb")
);
const List = React.lazy(() => import("./components/List/List"));

const Items = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  useEffect(() => {
    if (!searchValue) {
      navigate("/");
    }
  }, [searchValue]);

  return (
    <Suspense>
      <div className="items-page">
        <MainContainer>
          <ItemsSearchContextProvider searchValue={searchValue}>
            <Breadcrumb />
            <List />
          </ItemsSearchContextProvider>
        </MainContainer>
      </div>
    </Suspense>
  );
};

export default Items;
