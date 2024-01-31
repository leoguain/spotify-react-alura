import React from "react";
import "./styles.css";

import { ServicesListItem } from "./components/ServicesListItem";

export const MenuServiceLinks = () => {
  return (
    <div className="services__menu">
      <ul>
        <ServicesListItem text={"Premium"} href={"/"} />
        <ServicesListItem text={"Ajuda"} href={"/"} />
        <ServicesListItem text={"Baixar"} href={"/"} />
        <ServicesListItem text={"Privacidade"} href={"/"} />
        <ServicesListItem text={"Condições"} href={"/"} />
      </ul>
    </div>
  );
};
