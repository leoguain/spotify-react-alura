import React from "react";
import "./styles.css";

export const Footer = () => {
  return (
    <div className="footer__Container">
      <div className="text__box">
        <span className="text__title">Testar o Premium de graça</span>
        <span className="text__subtitle">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </span>
      </div>
      <button className="white__button lg__button">
        <span>Inscreva-se grátis</span>
      </button>
    </div>
  );
};
