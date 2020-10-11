import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/NavBar";
import ImagesResponsive from "../components/ImagesResponsive";
import Item from "../components/Item";
import Buttons from "../components/Buttons";

export default function CucuruchosPage() {
  return (
    <div>
      <Navbar banner={"banner2"} bannerMobile={"baner-mobile2"} logo={"logo"} />
      <div className="my-12">
        <ImagesResponsive img={"barra"} imgMobile={"barra-mobile"} />
      </div>
      <div className="mx-8 mt-2 ">
        <h1 className="uppercase text-gray-600 tracking-tighter">CUCURUCHOS</h1>
        <div className="flex flex-row justify-around md:justify-center items-center">
          <div className="flex flex-col md:flex-row md:h-64 items-center">
            <Link to="/producto">
              <Item name={"simple"} />
            </Link>
            <Link to="/producto">
              <Item name={"bañado"} />{" "}
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:h-64 items-center">
            <Link to="/producto">
              <Item name={"especial"} />{" "}
            </Link>
            <Link to="/producto">
              <Item name={"tresgustos"} />{" "}
            </Link>
          </div>
        </div>
      </div>
      <Buttons goToRoute={"/pago"} />
    </div>
  );
}
