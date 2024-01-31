import React, { useState } from "react";
import "./styles.css";

import { MenuDrawer } from "./components/MenuDrawer";
import { MenuHeader } from "./components/MenuHeader";

export const MenuMobile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="menu-mobile__container">
      <MenuHeader state={isActive} setState={setIsActive} />
      <MenuDrawer
        classByState={
          isActive
            ? "menu-mobile__drawer_expanded"
            : "menu-mobile__drawer_closed"
        }
        state={isActive}
        setState={setIsActive}
      />
    </div>
  );
};
