import React from "react";
import "./styles.css";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { ExternalButtonLink } from "./components/ExternalButtonLink";

export const ExternalLinks = () => {
  return (
    <div className="external__links">
      <ExternalButtonLink icon={faInstagram} />
      <ExternalButtonLink icon={faTwitter} />
      <ExternalButtonLink icon={faFacebook} />
    </div>
  );
};
