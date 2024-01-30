import React from "react";
import "./styles.css";
import smallLeftArrow from "../../../../../../assets/icons/small-left.png";
import smallRightArrow from "../../../../../../assets/icons/small-right.png";

import { SearchBar } from "./components/SearchBar";
import { NavButton } from "./components/NavButton";

export const Navigator = () => {
  return (
    <div className="navigator__container">
      <div className="buttons__container">
        <NavButton icon={smallLeftArrow} altText={"Seta Esquerda"} />
        <NavButton icon={smallRightArrow} altText={"Seta Direita"} />
      </div>

      <SearchBar />
    </div>
  );
};
