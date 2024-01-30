import React from "react";
import "./styles.css";

import { LoginMenu } from "./components/LoginMenu";
import { ServicesMenu } from "./components/ServicesMenu";

export const HeaderMenu = () => {
  return (
    <div className="menu__container">
      <ServicesMenu />
      <LoginMenu />
    </div>
  );
};
