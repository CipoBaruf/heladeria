import React from "react";

import Navbar from "../components/NavBar";
import ImagesResponsive from "../components/ImagesResponsive";
import Item from "../components/Item";
import Buttons from "../components/Buttons";

export default function CucuruchosPage() {
  return (
    <div className="flex flex-wrap h-screen flex-col">
      <Navbar banner={"banner2"} bannerMobile={"baner-mobile2"} logo={"logo"} />
      <div className="mt-4 ">
        <ImagesResponsive img={"barra"} imgMobile={"barra-mobile"} />
      </div>
      <div className="flex-1 flex flex-col">
        <h1 className=" uppercase text-gray-600 tracking-tighter ml-8 mt-8">
          CUCURUCHOS
        </h1>
        <div className="flex h-full justify-around  lg:flex-row lg:justify-center">
          <div className="flex flex-col items-center justify-around lg:flex-row lg:w-full">
            <Item name={"simple"} to={"/producto"} />
            <Item name={"bañado"} to={"/producto"} />
          </div>
          <div className="flex flex-col items-center justify-around lg:flex-row lg:w-full">
            <Item name={"especial"} to={"/producto"} />
            <Item name={"tresgustos"} to={"/producto"} />
          </div>
        </div>
      </div>
      <div className="my-4 lg:my-12">
        <Buttons goToRoute={"/pago"} />
      </div>
    </div>
  );
}
