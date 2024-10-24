import React from "react";

import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import "@theme";

const App = () => <RouterProvider router={router} />;

export default App;
