import React, { PropsWithChildren } from "react";

import "./MainContainer.scss";

const MainContainer = ({ children, ...props }: PropsWithChildren) => (
  <div className="main-container" {...props}>
    {children}
  </div>
);

export default MainContainer;
