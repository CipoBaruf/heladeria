import React from "react";
import { useHistory } from "react-router-dom";

export default function ProductoPage() {
  const history = useHistory();

  function handleClickPay() {
    history.push("/pago");
  }
  return (
    <div>
      <div className="absolute w-screen h-screen  flex flex-col justify-center items-center">
        <h1 className="text-white uppercase  underline font-extrabold italic text-4xl">
          cono piccolo
        </h1>
        <h1 className="text-gray-200 px-2 -my-2 font-semibold bg-gray-700  bg-opacity-25">
          Exquisito cucurucho con helado de vainilla y chips mágicos
        </h1>
        <h1 className="text-white -mb-4 mt-4 text-2xl font-semibold">
          un helado nunca fue
        </h1>
        <h1 className="text-white uppercase font-extrabold italic text-4xl">
          tan rico
        </h1>
        <button
          className="btn-green py-1 text-sm font-semibold "
          onClick={handleClickPay}
        >
          Comprar
        </button>
      </div>

      <div
        className="bg-cover h-screen bg-center"
        style={{
          backgroundImage: `url(${require("../images/heladosimple5.jpg")})`,
        }}
      />
    </div>
  );
}
