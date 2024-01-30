import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const ArtistCard = ({ id, name, url }) => {
  return (
    <div key={id} className="card-artist__container">
      <img src={url} className="artist__thumb" alt={`${name}`} />
      <FontAwesomeIcon icon={faPlay} />
      <div className="texts__container">
        <span className="card__title">{name}</span>
        <span className="card__description">Artista</span>
      </div>
    </div>
  );
};
