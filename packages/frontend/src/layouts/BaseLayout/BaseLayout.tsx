import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import "./BaseLayout.scss";

const Header = React.lazy(() => import("@components/Header/Header"));

const BaseLayout = () => (
  <Suspense>
    <Header />
    <main className="content">
      <Outlet />
    </main>
  </Suspense>
);

export default BaseLayout;
