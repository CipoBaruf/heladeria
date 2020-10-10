import React from "react";

import Item from "../components/Item";
import Navbar from "../components/Navbar";

export default function Categorias() {
  return (
    <React.Fragment>
      <Navbar bannerMobile={"baner-mobile1"} banner={"banner1"} logo={"logo"} />
      <div className="mx-8 mt-2 ">
        <h1 className="uppercase text-gray-600 tracking-tighter">
          Elige una opción
        </h1>
        <div className="flex justify-around md:justify-center  items-center md:flex-col">
          <div className="flex flex-col md:flex-row md:h-64 items-center">
            <Item name={"bebidas"} />
            <Item name={"cafeteria"} />
            <Item name={"cucuruchos"} />
            <Item name={"chocolate"} />
          </div>
          <div className="flex flex-col md:flex-row md:h-64 items-center">
            <Item name={"especialidades"} />
            <Item name={"copahelada"} />
            <Item name={"copadulce"} />
            <Item name={"promociones"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
