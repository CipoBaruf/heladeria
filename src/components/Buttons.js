import React from "react";
import { useHistory } from "react-router-dom";

export default function Buttons(props) {
  const { goToRoute } = props;
  const history = useHistory();

  function handleClickPay() {
    history.push(goToRoute);
  }
  function handleClickCancel() {
    history.goBack();
  }
  return (
    <div className=" mt-2 flex justify-center">
      <button
        className="bg-green-600 hover:bg-green-700 mx-2 text-white text-xs py-px px-8"
        onClick={handleClickPay}
      >
        Pagar
      </button>
      <button
        className="bg-red-600 hover:bg-red-700 mx-2 text-white text-xs py-px px-2"
        onClick={handleClickCancel}
      >
        Cancelar orden
      </button>
    </div>
  );
}
