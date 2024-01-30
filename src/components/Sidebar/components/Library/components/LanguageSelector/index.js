import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const LanguageSelector = () => {
  return (
    <section className="language-selector__container">
      <button className="language-selector__button">
        <FontAwesomeIcon icon={faGlobe} />
        <span>Português do Brasil</span>
      </button>
    </section>
  );
};
