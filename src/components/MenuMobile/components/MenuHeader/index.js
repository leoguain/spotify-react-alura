import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import spotifyLogo from "../../../../assets/icons/logo-spotify.png";

export const MenuHeader = ({ state, setState }) => {
  return (
    <div className="menu-mobile__header">
      <div className="logo">
        <a href="/">
          <img src={spotifyLogo} alt="logo do spotify" />
        </a>
      </div>
      <span
        onClick={() => {
          setState(!state);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </span>
    </div>
  );
};
