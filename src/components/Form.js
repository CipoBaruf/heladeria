import React from "react";
import { useHistory } from "react-router-dom";

export default function Form() {
  const history = useHistory();

  function handleClickPay() {
    history.push("/");
  }
  return (
    <div class="w-full">
      <form class="">
        <div class="mb-1">
          <label class="block text-gray-900 text-xs font-semibold">
            Nombre del titular
          </label>
          <input
            class="shadow-xs appearance-none rounded w-full py-px px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
          />
        </div>
        <div class="mb-1">
          <label class="block text-gray-900 text-xs font-semibold">
            Número de tarjeta
          </label>
          <input
            class="shadow-xs appearance-none rounded w-full py-px px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="creditCardpayment"
            type="text"
          />
        </div>
        <div className="flex">
          <div class="mb-1 mr-4">
            <label class="block text-gray-900 text-xs font-semibold">
              Fecha de expiración
            </label>
            <input
              class="shadow-xs appearance-none rounded w-full py-px px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="text"
            />
          </div>
          <div class="mb-1 mr-4">
            <label class="block text-gray-900 text-xs font-semibold">CVV</label>
            <input
              class="shadow-xs appearance-none rounded w-full py-px px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="CVV"
              type="text"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 mx-2 text-white text-xs py-px px-8"
            onClick={handleClickPay}
          >
            Pagar
          </button>
        </div>
      </form>
    </div>
  );
}
