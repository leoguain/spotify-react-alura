import React from "react";
import "./styles.css";

import spotifyLogo from "../../../../../../assets/icons/logo-spotify.png";

export const NavigationLogo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={spotifyLogo} alt="logo do spotify" />
      </a>
    </div>
  );
};
