import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const PlaylistCard = ({ id, name, url, description }) => {
  return (
    <div key={id} className="card__container">
      <img src={url} className="playlist__thumb" alt={`${name}`} />
      <FontAwesomeIcon icon={faPlay} />
      <span className="card__title">{name}</span>
      <span className="card__description">
        {description.length > 40
          ? description.substring(0, 40) + "..."
          : description}
      </span>
    </div>
  );
};
