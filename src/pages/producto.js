import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../components/NavBar";

export default function ProductoPage() {
  const history = useHistory();

  function handleClickPay() {
    history.push("/pago");
  }
  return (
    <div className="flex flex-wrap h-screen flex-col">
      <Navbar banner={"banner2"} bannerMobile={"baner-mobile2"} logo={"logo"} />

      <div
        className="bg-cover flex-1 flex bg-center "
        style={{
          backgroundImage: `url(${require("../images/heladosimple5.jpg")})`,
        }}
      >
        <div className="w-full flex flex-col justify-center items-center bg-black bg-opacity-25">
          <h1 className="text-white uppercase font-extrabold italic text-4xl md:text-6xl">
            cono piccolo
          </h1>
          <h1 className="text-white md:text-xl md:tracking-wider px-2 text-center leading-3 mb-8 mt-2 font-semibold">
            Exquisito cucurucho con helado de vainilla y chips mágicos
          </h1>
          <button
            className="btn-green py-1 text-sm md:text-xl font-semibold "
            onClick={handleClickPay}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
