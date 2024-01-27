import "./App.css";
import React from "react";
import { Sidebar } from "./components/Sidebar";
import { MainContainer } from "./components/MainContainer";
import { Footer } from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <MainContainer />
      <Footer />
    </React.Fragment>
  );
}

export default App;
