import React from "react";
import "./styles.css";
import { LinksBox } from "./components/LinksBox";
import { LanguageSelector } from "./components/LanguageSelector";
import { CreatePlaylist } from "./components/CreatePlaylist";
import { LibraryHeader } from "./components/LibraryHeader";

export const Library = () => {
  return (
    <div className="sidebar__library">
      <LibraryHeader />
      <CreatePlaylist />
      <LinksBox />
      <LanguageSelector />
    </div>
  );
};
