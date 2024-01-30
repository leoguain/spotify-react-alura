import React from "react";
import "./styles.css";

import { SimpleLink } from "../SimpleLink";

export const ServicesMenu = () => {
  return (
    <div className="services__container">
      <ul>
        <li>
          <SimpleLink text="Premium" />
        </li>
        <li>
          <SimpleLink text="Suporte" />
        </li>
        <li>
          <SimpleLink text="Baixar" />
        </li>
      </ul>
    </div>
  );
};
