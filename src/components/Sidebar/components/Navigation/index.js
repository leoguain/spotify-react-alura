import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

import spotifyLogo from "../../../../assets/icons/logo-spotify.png";

export const Navigation = () => {
  return (
    <nav className="sidebar__navigation">
      <div className="logo">
        <a href="/">
          <img src={spotifyLogo} alt="logo do spotify" />
        </a>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
