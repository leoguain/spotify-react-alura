import React from "react";
import "./styles.css";
import { ColumnLinks } from "./components/ColumnLinks";

export const InternalLinks = () => {
  return (
    <div className="internal__links">
      <ColumnLinks
        columnTitle={"Empresa"}
        linksArray={[
          { text: "Sobre", href: "/" },
          { text: "Empregos", href: "/" },
          { text: "For the Record", href: "/" },
        ]}
      />

      <ColumnLinks
        columnTitle={"Comunidades"}
        linksArray={[
          { text: "Para Artistas", href: "/" },
          { text: "Desenvolvedores", href: "/" },
          { text: "Publicidade", href: "/" },
          { text: "Investidores", href: "/" },
          { text: "Fornecedores", href: "/" },
        ]}
      />
      <ColumnLinks
        columnTitle={"Links úteis"}
        linksArray={[
          { text: "Suporte", href: "/" },
          { text: "Aplicativo móvel grátis", href: "/" },
        ]}
      />
    </div>
  );
};
