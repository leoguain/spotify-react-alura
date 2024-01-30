import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavigationLink = ({ text, icon, href }) => {
  return (
    <a href={href}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span>{text}</span>
    </a>
  );
};
