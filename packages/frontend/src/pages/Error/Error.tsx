import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Trans, useTranslation } from "react-i18next";

import imgSrc from "@assets/404.png";

import "./Error.scss";

const HomeLink = ({ children }: React.PropsWithChildren) => (
  <NavLink to="/">{children}</NavLink>
);

const Error = () => {
  const { t } = useTranslation();

  return (
    <Suspense>
      <Helmet>
        <title>{t("error.title")}</title>
        <meta name="description" content={t("error.description")} />
      </Helmet>

      <div className="error-container">
        <h1>{t("error.title")}</h1>
        <p>
          <Trans components={{ homeLink: <HomeLink /> }}>
            {t("error.text")}
          </Trans>
        </p>
        <img src={imgSrc} />
      </div>
    </Suspense>
  );
};

export default Error;
