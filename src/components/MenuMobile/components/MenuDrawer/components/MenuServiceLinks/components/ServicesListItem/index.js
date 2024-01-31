import React from "react";
import "./styles.css";

export const ServicesListItem = ({ text, href }) => {
  return (
    <li>
      <a className="services__button" href={href}>
        {text}
      </a>
    </li>
  );
};
