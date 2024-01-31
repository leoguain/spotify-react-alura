import React from "react";
import "./styles.css";

import { MainListItem } from "./components/MainListItem";

export const MenuMainLinks = () => {
  return (
    <div className="login__menu">
      <ul>
        <MainListItem text={"Entre"} href={"/"} />
        <MainListItem text={"Inscreva-se"} href={"/"} />
      </ul>
    </div>
  );
};
