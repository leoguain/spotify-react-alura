import "./App.css";
import React from "react";
import { Sidebar } from "./components/Sidebar";
import { MainContainer } from "./components/MainContainer";
import { Footer } from "./components/Footer";
import { HeaderMobile } from "./components/HeaderMobile";

function App() {
  return (
    <div className="content__container">
      <HeaderMobile />
      <div>
        <Sidebar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
