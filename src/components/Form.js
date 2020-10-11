import React from "react";
import { useHistory } from "react-router-dom";

import InputForm from "./InputForm";

export default function Form() {
  const history = useHistory();
  function handleClickPay() {
    history.push("/");
  }
  return (
    <div className="w-full">
      <form className="">
        <InputForm label="Nombre del titular" id="name" />
        <InputForm label="Número de tarjeta" id="creditCardpayment" />
        <div className="flex ">
          <InputForm label="Vencimiento" id="date" margin="mr-4" />
          <InputForm label="CVV" id="CVV" margin="mr-4" />
        </div>
      </form>
      <div className="mt-4 flex justify-center">
        <button className="md:text-xl btn-green" onClick={handleClickPay}>
          Pagar
        </button>
      </div>
    </div>
  );
}
