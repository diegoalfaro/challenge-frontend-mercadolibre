import React from "react";
import { NavLink } from "react-router-dom";

import { ScreenSize, useScreenSize } from "@hooks/screen-size";

import MainContainer from "@components/Grid/MainContainer";
import Searchbar from "@components/Searchbar/Searchbar";

import logoLgSrc from "@assets/logo-lg.svg";
import logoSmSrc from "@assets/logo-sm.svg";

import "./Header.scss";

const Header = () => {
  const screenSize = useScreenSize();
  const logoSrc =
    screenSize > ScreenSize.tabletPortrait ? logoLgSrc : logoSmSrc;

  return (
    <header className="header">
      <MainContainer>
        <div className="header-container">
          <NavLink aria-label="logo" className="logo-container" to="/">
            <img className="logo" src={logoSrc} />
          </NavLink>
          <div className="searchbar-container">
            <Searchbar inputId="search" />
          </div>
        </div>
      </MainContainer>
    </header>
  );
};

export default Header;
