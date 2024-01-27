import React from "react";
import "./styles.css";
import smallLeftArrow from "../../../../assets/icons/small-left.png";
import smallRightArrow from "../../../../assets/icons/small-right.png";
import search from "../../../../assets/icons/search.png";

import { useSearch } from "../../../../contexts/SearchContext";
import { SimpleLink } from "./components/SimpleLink";

export const Header = () => {
  const { searchTerm, setSearchTerm, loadArtists, loadPlaylists } = useSearch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    loadArtists(searchTerm);
    loadPlaylists(searchTerm);
  };

  return (
    <nav className="header__navigator">
      <div className="navigator">
        <button className="navigator__button">
          <img src={smallLeftArrow} alt="Seta Esquerda" />
        </button>
        <button className="navigator__button">
          <img src={smallRightArrow} alt="Seta Direita" />
        </button>

        <div className="header__search">
          <img src={search} alt="Seta Esquerda" />
          <input
            id="search-input"
            type="text"
            maxLength="800"
            placeholder="O que você quer ouvir?"
            autoCorrect="off"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="header__right-menu">
        <div className="header__menu">
          <ul>
            <li>
              <SimpleLink text="Premium" />
            </li>
            <li>
              <SimpleLink text="Suporte" />
            </li>
            <li>
              <SimpleLink text="Baixar" />
            </li>
          </ul>
        </div>
        <div className="header__login">
          <SimpleLink text="Inscrever-se" />
          <button className="white__button lg__button">
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
