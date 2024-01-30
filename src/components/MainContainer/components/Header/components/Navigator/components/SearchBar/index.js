import React from "react";
import "./styles.css";
import search from "../../../../../../../../assets/icons/search.png";

import { useSearch } from "../../../../../../../../contexts/SearchContext";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm, loadArtists, loadPlaylists } = useSearch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    loadArtists(value);
    loadPlaylists(value);
  };

  return (
    <div className="search__container">
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
  );
};
