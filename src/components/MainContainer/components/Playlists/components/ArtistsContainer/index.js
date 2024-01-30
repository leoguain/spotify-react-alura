import React, { useEffect } from "react";
import "../../styles.css";

import { ArtistCard } from "./components/ArtistCard";

import { useSearch } from "../../../../../../contexts/SearchContext";
import { NoDataContainer } from "../NoDataContainer";
import { SectionHeader } from "../SectionHeader";

export const ArtistsContainer = () => {
  const { searchTerm, loadArtists, artistsList, noDataMsg } = useSearch();

  useEffect(() => {
    loadArtists(searchTerm);
  }, []);

  return (
    <div>
      <SectionHeader mainLinkText={"Artistas"} />

      {artistsList.length === 0 ? (
        <NoDataContainer
          errorTitle={`Nenhum artista encontrado para "${searchTerm}"`}
          errorDescription={noDataMsg}
        />
      ) : (
        <section className="items__container">
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
  );
};
