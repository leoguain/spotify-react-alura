import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const DrawerHeader = ({ state, setState }) => {
  return (
    <div className="drawer__header">
      <span
        onClick={() => {
          setState(!state);
        }}
      >
        <FontAwesomeIcon icon={faClose} />
      </span>
    </div>
  );
};
