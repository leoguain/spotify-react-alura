import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import spotifyLogo from "../../assets/icons/logo-spotify.png";

export const HeaderMobile = () => {
  return (
    <div className="header-mobile__container">
      <div className="logo">
        <a href="/">
          <img src={spotifyLogo} alt="logo do spotify" />
        </a>
      </div>
      <a href="/">
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </a>
    </div>
  );
};
