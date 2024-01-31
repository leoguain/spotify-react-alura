import React from "react";
import "./styles.css";

import { ListItem } from "./components/ListItem";

export const ColumnLinks = ({ columnTitle, linksArray }) => {
  return (
    <div className="column__links">
      <span className="column__title">{columnTitle}</span>
      <ul>
        {linksArray.map((link) => (
          <ListItem key={link.text} link={link} />
        ))}
      </ul>
    </div>
  );
};
