import React from "react";
import { Link } from "react-router-dom";

import ButtonsPago from "../components/ButtonsPago";
import Form from "../components/Form";

export default function PayPage() {
  const backgroundStyle =
    "absolute h-screen w-screen bg-gradient-to-r from-blue-700 to-blue-500";
  return (
    <div className={backgroundStyle}>
      <div className="flex flex-col md:flex-row">
        <Link to="/">
          <img
            className="h-16 w-16 m-6  md:h-24 md:w-24"
            src={require(`../images/logo.png`)}
            alt=""
          />
        </Link>
      </div>
      <div className="flex flex-col items-center md:-mt-12  ">
        <div className="containers mb-4 md:flex-row md:justify-around">
          <div className="flex md:flex-col">
            <p className="text-gray-800">Total a pagar</p>
            <p className="md:font-bold md:text-xl md:ml-0 ml-1 ">$5900</p>
          </div>
          <ButtonsPago />
        </div>
        <div className="containers">
          <p className="text-2xl text-gray-700">Formas de Pago</p>
          <img
            className="my-4 h-12 md:h-20"
            src={require(`../images/tarjetas.png`)}
            alt=""
          />
          <img
            className="my-2 h-16 md:h-20"
            src={require(`../images/tarjetas2.png`)}
            alt=""
          />
          <Form />
        </div>
      </div>
    </div>
  );
}
