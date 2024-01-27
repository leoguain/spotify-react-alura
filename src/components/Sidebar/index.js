import React from "react";
import "./styles.css";
import { Navigation } from "./components/Navigation";
import { Library } from "./components/Library";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navigation />
      <Library />
    </div>
  );
};
