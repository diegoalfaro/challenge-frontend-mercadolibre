import React, { Suspense, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ItemsSearchContextProvider } from "@hooks/items-search";

import "./Items.scss";
import { useTranslation } from "react-i18next";

const MainContainer = React.lazy(
  () => import("@components/Grid/MainContainer")
);
const Breadcrumb = React.lazy(
  () => import("./components/Breadcrumb/Breadcrumb")
);
const List = React.lazy(() => import("./components/List/List"));

const Items = () => {
  const { t } = useTranslation();
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
      <ItemsSearchContextProvider searchValue={searchValue}>
        <Helmet>
          <title>{searchValue}</title>
          <meta
            name="description"
            content={t("items.description", { search: searchValue })}
          />
        </Helmet>

        <div className="items-page">
          <MainContainer>
            <Breadcrumb />
            <List />
          </MainContainer>
        </div>
      </ItemsSearchContextProvider>
    </Suspense>
  );
};

export default Items;
