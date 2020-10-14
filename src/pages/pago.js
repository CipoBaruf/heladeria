import React from "react";
import { Link } from "react-router-dom";

import ButtonsPago from "../components/ButtonsPago";
import Form from "../components/Form";

export default function PayPage() {
  return (
    <div className="absolute h-screen w-screen bg-gradient-to-r from-blue-700 to-blue-500">
      <Link to="/">
        <img
          className="h-16 w-16 m-6  lg:h-24 lg:w-24"
          src={require(`../images/logo.png`)}
          alt=""
        />
      </Link>
      <div className="flex flex-col items-center lg:mx-64 ">
        <div className="containers mb-4 md:flex-row md:justify-around">
          <div className="flex md:flex-col">
            <p className="text-gray-800 lg:font-bold md:text-xl">
              Total a pagar
            </p>
            <p className="lg:font-bold md:text-xl">$5900</p>
          </div>
          <ButtonsPago />
        </div>
        <div className="containers">
          <p className="text-2xl text-gray-700">Formas de Pago</p>
          <img
            className="my-4 h-12 "
            src={require(`../images/tarjetas.png`)}
            alt=""
          />
          <img
            className="my-2 h-16 md:h-32"
            src={require(`../images/tarjetas2.png`)}
            alt=""
          />
          <Form />
        </div>
      </div>
    </div>
  );
}
