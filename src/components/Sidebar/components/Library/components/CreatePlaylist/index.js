import React from "react";
import "./styles.css";

export const CreatePlaylist = () => {
  return (
    <section className="playlist__container">
      <div className="box__container">
        <span className="box__title">Crie sua primeira playlist</span>
        <span className="box__subtitle">É fácil, vamos te ajudar.</span>
        <button className="white__button">
          <span>Criar playlist</span>
        </button>
      </div>
      <div className="box__container">
        <span className="box__title">Que tal seguir um podcast novo?</span>
        <span className="box__subtitle">
          Avisaremos você sobre novos episódios.
        </span>
        <button className="white__button">
          <span>Explore podcasts</span>
        </button>
      </div>
    </section>
  );
};
