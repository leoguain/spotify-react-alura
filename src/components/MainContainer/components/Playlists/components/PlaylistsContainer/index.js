import React, { useEffect } from "react";
import "../../styles.css";

import { PlaylistCard } from "./components/PlaylistCard";

import { useSearch } from "../../../../../../contexts/SearchContext";
import { NoDataContainer } from "../NoDataContainer";
import { SectionHeader } from "../SectionHeader";

export const PlaylistsContainer = () => {
  const {
    searchTerm,
    dataFetched,
    setDataFetched,
    loadPlaylists,
    playlistsList,
    noDataMsg,
  } = useSearch();

  useEffect(() => {
    if (!dataFetched) {
      loadPlaylists(searchTerm);
      setDataFetched(true);
    }
  }, [loadPlaylists, searchTerm, dataFetched, setDataFetched]);

  return (
    <div>
      <SectionHeader
        mainLinkText={"Playlists do Spotify"}
        secondaryLinkText={"Mostrar tudo"}
      />

      {playlistsList.length === 0 ? (
        <NoDataContainer
          errorTitle={`Nenhuma playlist encontrada para "${searchTerm}"`}
          errorDescription={noDataMsg}
        />
      ) : (
        <section className="items__container">
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
  );
};
