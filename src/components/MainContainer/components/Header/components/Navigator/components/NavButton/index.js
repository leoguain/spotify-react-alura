import React from "react";
import "./styles.css";

export const NavButton = ({ icon, altText }) => {
  return (
    <button className="navigator__button">
      <img src={icon} alt={altText} />
    </button>
  );
};
