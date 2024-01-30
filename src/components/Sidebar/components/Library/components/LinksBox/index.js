import React from "react";
import "./styles.css";
import { SmallLink } from "./components/SmallLink";

export const LinksBox = () => {
  return (
    <section className="links__container">
      <SmallLink text={"Legal"} className={"links__item"} />
      <SmallLink text={"Centro de Privacidade"} className={"links__item"} />
      <SmallLink text={"Política de Privacidade"} className={"links__item"} />
      <SmallLink text={"Cookies"} className={"links__item"} />
      <SmallLink text={"Sobre anúncios"} className={"links__item"} />
      <SmallLink text={"Acessibilidade"} className={"links__item"} />
      <SmallLink text={"Notice at Collection"} className={"links__item"} />
      <SmallLink text={"Your Privacy Choices"} className={"links__item"} />
      <SmallLink text={"Cookies"} className={"cookies__link"} />
    </section>
  );
};
