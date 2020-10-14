import React from "react";

import Buttons from "../components/Buttons";
import Item from "../components/Item";
import Navbar from "../components/NavBar";

export default function CategoriasPage() {
  return (
    <div className="flex flex-wrap h-screen flex-col">
      <Navbar bannerMobile={"baner-mobile1"} banner={"banner1"} logo={"logo"} />
      <div className="flex-1 flex flex-col">
        <h1 className="uppercase text-gray-600 tracking-tighter ml-8 mt-8">
          Elige una opción
        </h1>
        <div className="flex h-full justify-around  lg:flex-col">
          <div className="flex flex-col items-center justify-around lg:flex-row">
            <Item name={"bebidas"} to={"/cucuruchos"} />
            <Item name={"cafeteria"} to={"/cucuruchos"} />
            <Item name={"cucuruchos"} to={"/cucuruchos"} />
            <Item name={"chocolate"} to={"/cucuruchos"} />
          </div>
          <div className="flex flex-col items-center justify-around lg:flex-row">
            <Item name={"especialidades"} to={"/cucuruchos"} />
            <Item name={"copahelada"} to={"/cucuruchos"} />
            <Item name={"copadulce"} to={"/cucuruchos"} />
            <Item name={"promociones"} to={"/cucuruchos"} />
          </div>
        </div>
        <div className="my-4 lg:my-12 xl:my-4">
          <Buttons goToRoute={"/cucuruchos"} />
        </div>
      </div>
    </div>
  );
}
