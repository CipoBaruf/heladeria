import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";

import Item from "../components/Item";
import Navbar from "../components/NavBar";

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
            <Link to="/cucuruchos">
              <Item name={"bebidas"} />{" "}
            </Link>
            <Link to="/cucuruchos">
              <Item name={"cafeteria"} />{" "}
            </Link>
            <Link to="/cucuruchos">
              <Item name={"cucuruchos"} />{" "}
            </Link>
            <Link to="/cucuruchos">
              {" "}
              <Item name={"chocolate"} />{" "}
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:h-64 items-center">
            <Link to="/cucuruchos">
              <Item name={"especialidades"} />{" "}
            </Link>
            <Link to="/cucuruchos">
              <Item name={"copahelada"} />{" "}
            </Link>
            <Link to="/cucuruchos">
              <Item name={"copadulce"} />{" "}
            </Link>
            <Link to="/cucuruchos">
              <Item name={"promociones"} />{" "}
            </Link>
          </div>
        </div>
      </div>
      <Buttons goToRoute={"/cucuruchos"} />
    </React.Fragment>
  );
}
