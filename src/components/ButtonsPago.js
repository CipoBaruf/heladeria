import React from "react";
import { useHistory } from "react-router-dom";

export default function ButtonsPago(props) {
  const history = useHistory();

  function handleClickPay() {
    history.push("/");
  }
  function handleClickCancel() {
    history.goBack();
  }
  return (
    <div className=" mt-2 flex md:flex-col justify-center">
      <button
        className="bg-green-600 hover:bg-green-700 mx-2 text-white text-xs py-px px-8 rounded md:mt-2"
        onClick={handleClickPay}
      >
        Ver detalle
      </button>
      <button
        className="bg-red-600 hover:bg-red-700 mx-2 text-white text-xs py-px px-2 rounded md:mt-2"
        onClick={handleClickCancel}
      >
        Cancelar orden
      </button>
    </div>
  );
}
