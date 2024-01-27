import { createContext, useContext, useState } from "react";

const initialValue = {
  noDataMsg: "",
  searchTerm: "",
  setSearchList: () => {},
  artistsList: [],
  setArtistsList: () => {},
  playlistsList: [],
  setPlaylistsList: () => {},
  loadArtists: () => {},
  loadPlaylists: () => {},
};

export const SearchContext = createContext(initialValue);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artistsList, setArtistsList] = useState([]);
  const [playlistsList, setPlaylistsList] = useState([]);

  const noDataMsg =
    "Confira se você digitou corretamente ou use menos palavras‑chave ou palavras‑chave diferentes.";

  const loadArtists = async (searchTerm) => {
    try {
      const urlApi = `http://localhost:3000/artists?name_like=${searchTerm}`;

      const response = await fetch(urlApi);
      const result = await response.json();

      setArtistsList(result);
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  };

  const loadPlaylists = async (searchTerm) => {
    try {
      const urlApi =
        searchTerm !== ""
          ? `http://localhost:3000/playlists?name_like=${searchTerm}`
          : `http://localhost:3000/playlists`;

      const response = await fetch(urlApi);
      const result = await response.json();

      setPlaylistsList(result);
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        noDataMsg,
        searchTerm,
        setSearchTerm,
        artistsList,
        setArtistsList,
        playlistsList,
        setPlaylistsList,
        loadArtists,
        loadPlaylists,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
