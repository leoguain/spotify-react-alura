import React from "react";
import "./styles.css";

export const MainListItem = ({ text, href }) => {
  return (
    <li>
      <a className="login__button" href={href}>
        {text}
      </a>
    </li>
  );
};
