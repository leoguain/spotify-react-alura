import React from "react";
import "./styles.css";

import { ExternalLinks } from "./components/ExternalLinks";
import { InternalLinks } from "./components/InternalLinks";

export const MainFooter = () => {
  return (
    <section className="main__footer">
      <InternalLinks />
      <ExternalLinks />
    </section>
  );
};
