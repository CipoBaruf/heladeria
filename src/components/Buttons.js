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
    <div className="flex justify-center">
      <button className=" btn-green lg:text-lg" onClick={handleClickPay}>
        Pagar
      </button>
      <button className="btn-red lg:text-lg" onClick={handleClickCancel}>
        Cancelar orden
      </button>
    </div>
  );
}
