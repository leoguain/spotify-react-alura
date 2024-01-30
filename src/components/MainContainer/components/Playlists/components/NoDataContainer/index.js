import React from "react";
import "./styles.css";

export const NoDataContainer = ({ errorTitle, errorDescription }) => {
  return (
    <div className="no-data__Container">
      <span className="error__title">{errorTitle}</span>
      <span className="error__description">{errorDescription}</span>
    </div>
  );
};
