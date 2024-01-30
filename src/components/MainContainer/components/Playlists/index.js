import React from "react";
import "./styles.css";

import { useSearch } from "../../../../contexts/SearchContext.js";
import { ArtistsContainer } from "./components/ArtistsContainer/index.js";
import { PlaylistsContainer } from "./components/PlaylistsContainer/index.js";

export const Playlists = () => {
  const { searchTerm } = useSearch();

  return (
    <div className="playlists">
      {searchTerm !== "" && <ArtistsContainer />}

      <PlaylistsContainer />
    </div>
  );
};
