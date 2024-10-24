import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const BaseLayout = React.lazy(() => import("@layouts/BaseLayout/BaseLayout"));

const Home = React.lazy(() => import("@pages/Home/Home"));
const Items = React.lazy(() => import("@pages/Items/Items"));
const Item = React.lazy(() => import("@pages/Item/Item"));
const Error = React.lazy(() => import("@pages/Error/Error"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <BaseLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/items",
        Component: (props) => {
          console.log("props", props);
          return (
            <Suspense>
              <Items />
            </Suspense>
          );
        },
      },
      {
        path: "/items/:itemId",
        element: (
          <Suspense>
            <Item />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense>
        <Error />
      </Suspense>
    ),
  },
]);
