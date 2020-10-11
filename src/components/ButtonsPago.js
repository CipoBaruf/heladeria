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
      <button className="btn-green " onClick={handleClickPay}>
        Ver detalle
      </button>
      <button className="btn-red md:mt-2" onClick={handleClickCancel}>
        Cancelar orden
      </button>
    </div>
  );
}
