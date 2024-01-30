import React from "react";
import "./styles.css";

export const SectionHeader = ({ mainLinkText, secondaryLinkText }) => {
  return (
    <div className="section-header__container">
      <a className="main__link" href="/">
        {mainLinkText}
      </a>
      {secondaryLinkText && (
        <a className="default__link" href="/">
          {secondaryLinkText}
        </a>
      )}
    </div>
  );
};
