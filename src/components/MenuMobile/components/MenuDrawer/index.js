import React from "react";
import "./styles.css";

import { MenuMainLinks } from "./components/MenuMainLinks";
import { MenuServiceLinks } from "./components/MenuServiceLinks";
import { DrawerHeader } from "./components/DrawerHeader";

export const MenuDrawer = ({ classByState, state, setState }) => {
  return (
    <div className={classByState}>
      <DrawerHeader state={state} setState={setState} />
      <MenuMainLinks />
      <hr />
      <MenuServiceLinks />
    </div>
  );
};
