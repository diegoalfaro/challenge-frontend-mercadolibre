import React from "react";
import { NavLink } from "react-router-dom";

import imgSrc from "@assets/404.png";

import "./Error.scss";

const Error = () => (
  <div className="error-container">
    <h1>Parece que estás perdido</h1>
    <p>
      Tal vez lo mejor sea que vuelvas al <NavLink to="/">inicio</NavLink>
    </p>
    <img src={imgSrc} />
  </div>
);

export default Error;
