import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ExternalButtonLink = ({ icon }) => {
  return (
    <span className="button-external__links">
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};
