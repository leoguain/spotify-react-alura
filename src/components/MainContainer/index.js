import React from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { Playlists } from "./components/Playlists";
import { Copyright } from "./components/Copyright";
import { MainFooter } from "./components/MainFooter";
import { SearchContextProvider } from "../../contexts/SearchContext";

export const MainContainer = () => {
  return (
    <main>
      <SearchContextProvider>
        <div className="main__container">
          <Header />
          <Playlists />
          <MainFooter />
          <Copyright />
        </div>
      </SearchContextProvider>
    </main>
  );
};
