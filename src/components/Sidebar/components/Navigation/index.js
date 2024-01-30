import React from "react";
import "./styles.css";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

import { NavigationLogo } from "./components/NavigationLogo";
import { NavigationLink } from "./components/NavigationLink";

export const Navigation = () => {
  return (
    <nav className="navigation__container">
      <NavigationLogo />

      <div>
        <ul>
          <li>
            <NavigationLink text={"Início"} icon={faHome} href={"/"} />
          </li>
          <li>
            <NavigationLink text={"Buscar"} icon={faSearch} href={"/"} />
          </li>
        </ul>
      </div>
    </nav>
  );
};
