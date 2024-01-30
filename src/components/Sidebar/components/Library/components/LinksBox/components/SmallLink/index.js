import React from "react";
import "./styles.css";

export const SmallLink = ({ text, className }) => {
  return (
    <a className={className} href="/">
      {text}
    </a>
  );
};
