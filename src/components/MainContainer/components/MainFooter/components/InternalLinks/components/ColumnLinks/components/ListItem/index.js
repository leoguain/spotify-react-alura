import React from "react";
import "./styles.css";

export const ListItem = ({ link }) => {
  return (
    <li key={link.text}>
      <a href={link.href}>{link.text}</a>
    </li>
  );
};
