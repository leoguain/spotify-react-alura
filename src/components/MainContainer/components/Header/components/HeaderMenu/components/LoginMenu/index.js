import React from "react";
import "./styles.css";

import { SimpleLink } from "../SimpleLink";

export const LoginMenu = () => {
  return (
    <div className="login__container">
      <SimpleLink text="Inscrever-se" />
      <button className="white__button lg__button">
        <span>Entrar</span>
      </button>
    </div>
  );
};
