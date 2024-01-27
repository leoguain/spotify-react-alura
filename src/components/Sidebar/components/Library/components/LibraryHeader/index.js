import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";
export const LibraryHeader = () => {
  return (
    <div className="library__header">
      <button className="library__button">
        <span>
          <FontAwesomeIcon icon={faBook} />
        </span>
        <span>Sua Biblioteca</span>
      </button>
      <FontAwesomeIcon icon={faPlus} className="library__button" />
    </div>
  );
};
