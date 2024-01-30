import React from "react";
import "./styles.css";

import { HeaderMenu } from "./components/HeaderMenu";
import { Navigator } from "./components/Navigator";

export const Header = () => {
  return (
    <nav className="header__container">
      <Navigator />
      <HeaderMenu />
    </nav>
  );
};
