import React from "react";
import { RouterProvider } from "react-router-dom";

import "@theme";
import "@i18n";
import LangProvider from "@i18n/LangProvider";

import { router } from "./router";

const App = () => (
  <LangProvider>
    <RouterProvider router={router} />
  </LangProvider>
);

export default App;
