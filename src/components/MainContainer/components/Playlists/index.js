import React, { useEffect } from "react";
import "./styles.css";

import { ArtistCard } from "./components/ArtistCard";
import { PlaylistCard } from "./components/PlaylistCard";

import { useSearch } from "../../../../contexts/SearchContext.js";

export const Playlists = () => {
  const {
    searchTerm,
    loadArtists,
    loadPlaylists,
    artistsList,
    playlistsList,
    noDataMsg,
  } = useSearch();

  useEffect(() => {
    loadArtists(searchTerm);
    loadPlaylists(searchTerm);
  }, []);

  return (
    <div className="playlists">
      {searchTerm !== "" && (
        <div id="artists-container" className="">
          <div id="artists-header" className="main__header">
            <a className="main__link" href="/">
              Artistas
            </a>
          </div>
          {artistsList.length === 0 ? (
            <div id="artists-not-found" className="data__not-found">
              <span id="error-title-artist" className="error__title">
                Nenhum artista encontrado para "{searchTerm}"
              </span>
              <span className="error__description">{noDataMsg}</span>
            </div>
          ) : (
            <section id="result-artists" className="playlist__items">
              {artistsList.map((artist) => (
                <ArtistCard
                  key={artist.id}
                  id={artist.id}
                  name={artist.name}
                  url={artist.urlImg}
                />
              ))}
            </section>
          )}
        </div>
      )}

      <div id="playlists-container" className="">
        <div id="playlists-header" className="main__header">
          <a className="main__link" href="/">
            Playlists do Spotify
          </a>
          <a className="default__link" href="/">
            Mostrar tudo
          </a>
        </div>
        {playlistsList.length === 0 ? (
          <div id="playlists-not-found" className="data__not-found">
            <span id="error-title-playlist" className="error__title">
              Nenhuma playlist encontrada para "{searchTerm}"
            </span>
            <span className="error__description">{noDataMsg}</span>
          </div>
        ) : (
          <section id="result-playlists" className="playlist__items">
            {playlistsList.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                id={playlist.id}
                name={playlist.name}
                url={playlist.urlImg}
                description={playlist.description}
              />
            ))}
          </section>
        )}
      </div>
    </div>
  );
};
