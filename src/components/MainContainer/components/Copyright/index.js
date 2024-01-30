import React from "react";
import "./styles.css";

import { LinksBox } from "../../../Sidebar/components/Library/components/LinksBox";
import { LanguageSelector } from "../../../Sidebar/components/Library/components/LanguageSelector";

export const Copyright = () => {
  return (
    <div className="copyright">
      <div className="mobile-only__container">
        <LinksBox />
        <LanguageSelector />
      </div>
      © 2024 leoguain
    </div>
  );
};
