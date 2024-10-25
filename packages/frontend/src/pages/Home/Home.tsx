import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { getRandomItems } from "@helpers/arrays";
import { useCategories } from "@hooks/categories";
import MainContainer from "@components/Grid/MainContainer";

import "./Home.scss";

const Slider = React.lazy(() => import("./components/Slider/Slider"));
const List = React.lazy(() => import("./components/List/List"));

const Home = () => {
  const { t } = useTranslation();
  const { categories } = useCategories();

  return (
    <Suspense>
      <Helmet>
        <title>{t("home.title")}</title>
        <meta name="description" content={t("home.description")} />
      </Helmet>

      <div className="home-page">
        <Slider />
        <div className="shadow"></div>
        <MainContainer>
          <div className="home-page-lists">
            {getRandomItems(categories, 4).map(({ id, name }) => (
              <List
                key={`category-${id}-list`}
                title={name}
                searchValue={name}
              />
            ))}
          </div>
        </MainContainer>
      </div>
    </Suspense>
  );
};
export default Home;
