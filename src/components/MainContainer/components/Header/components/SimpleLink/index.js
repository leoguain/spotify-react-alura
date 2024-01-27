import React from "react";
import "./styles.css";

export const SimpleLink = ({ text }) => {
  return (
    <a className="header__button" href="/">
      <span>{text}</span>
    </a>
  );
};
