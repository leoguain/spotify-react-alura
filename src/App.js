import "./App.css";
import React from "react";

import { MenuMobile } from "./components/MenuMobile";
import { Sidebar } from "./components/Sidebar";
import { MainContainer } from "./components/MainContainer";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="content__container">
      <MenuMobile />
      <div>
        <Sidebar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
