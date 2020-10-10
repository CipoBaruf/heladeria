import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/NavBar";
import ImagesResponsive from "../utils/ImagesResponsive";
import Item from "../components/Item";
import Buttons from "../components/Buttons";

function cucuruchos(props) {
  return (
    <div>
      <Navbar banner={"banner2"} bannerMobile={"baner-mobile2"} logo={"logo"} />
      <div className="my-4">
        <ImagesResponsive img={"barra"} imgMobile={"barra-mobile"} />
      </div>
      <div className="mx-8 mt-2 ">
        <h1 className="uppercase text-gray-600 tracking-tighter">CUCURUCHOS</h1>
        <div className="flex flex-row justify-around md:justify-center items-center">
          <div className="flex flex-col md:flex-row md:h-64 items-center">
            <Item name={"simple"} />
            <Item name={"cafeteria"} />
          </div>
          <div className="flex flex-col md:flex-row md:h-64 items-center">
            <Item name={"especial"} />
            <Item name={"tresgustos"} />
          </div>
        </div>
      </div>
      <Buttons goToRoute={"/pago"} />
    </div>
  );
}

export default cucuruchos;
