import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const MainFooter = () => {
  return (
    <section className="main__footer">
      <div className="internal__links">
        <div className="column__links">
          <span className="column__title">Empresa</span>
          <ul>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Empregos</a>
            </li>
            <li>
              <a href="/">For the Record</a>
            </li>
          </ul>
        </div>

        <div className="column__links">
          <span className="column__title">Comunidades</span>
          <ul>
            <li>
              <a href="/">Para Artistas</a>
            </li>
            <li>
              <a href="/">Desenvolvedores</a>
            </li>
            <li>
              <a href="/">Publicidade</a>
            </li>
            <li>
              <a href="/">Investidores</a>
            </li>
            <li>
              <a href="/">Fornecedores</a>
            </li>
          </ul>
        </div>

        <div className="column__links">
          <span className="column__title">Links úteis</span>
          <ul>
            <li>
              <a href="/">Suporte</a>
            </li>
            <li>
              <a href="/">Aplicativo móvel grátis</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="external__links">
        <span className="button__links">
          <FontAwesomeIcon icon={faInstagram} />
        </span>
        <span className="button__links">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span className="button__links">
          <FontAwesomeIcon icon={faFacebook} />
        </span>
      </div>
    </section>
  );
};
