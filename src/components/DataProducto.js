import React from "react";
import { useHistory } from "react-router-dom";

export default function DataProducto() {
  const history = useHistory();

  function handleClickPay() {
    history.push("/pago");
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25">
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
  );
}
