import React from "react";
import ButtonsPago from "../components/ButtonsPago";
import Form from "../components/Form";

export default function pago() {
  return (
    <div className="absolute h-screen w-screen bg-gradient-to-r from-blue-700 to-blue-500">
      <div className="flex flex-col md:flex-row">
        <img
          className="h-16 w-16 m-6  md:h-24 md:w-24"
          src={require(`../images/logo.png`)}
          alt=""
        />
        <div className="flex flex-col items-center md:mt-32">
          <div className="p-4 w-3/4 bg-gray-100 shadow-lg rounded flex flex-col items-center md:flex-row md:justify-around">
            <div className="flex md:flex-col">
              <p className="text-gray-800">Total a pagar</p>
              <p className="md:font-bold md:text-xl md:ml-0 ml-1 ">$5900</p>
            </div>
            <ButtonsPago />
          </div>
          <div className="p-4 w-3/4 mt-4 bg-gray-100 shadow-lg rounded flex flex-col items-center">
            <p className="text-2xl text-gray-700">Formas de Pago</p>
            <img
              className="my-4 w-1/4"
              src={require(`../images/tarjetas.png`)}
              alt=""
            />
            <img
              className="my-2"
              src={require(`../images/tarjetas2.png`)}
              alt=""
            />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
