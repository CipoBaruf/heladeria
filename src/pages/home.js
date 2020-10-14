import React from "react";
import { useHistory } from "react-router-dom";
export default function HomePage() {
  const styleImgMobile =
    "absolute w-screen  h-screen visible  md:visible lg:invisible";
  const styleImg =
    "absolute h-screen w-screen invisible md:invisible lg:visible";
  const history = useHistory();

  function handleClick() {
    history.push("/categorias");
  }
  return (
    <div className="h-screen">
      <img
        className="absolute z-50 h-16 w-16 m-6  md:h-24 md:w-24"
        src={require("../images/logo.png")}
        alt=""
      />
      <div className="container-btn">
        <button className="btn-red mb-16" onClick={handleClick}>
          SHOP NOW
        </button>
      </div>
      <div className="relative">
        <img
          className={styleImgMobile}
          src={require("../images/portada-mobile.png")}
          alt=""
        ></img>
        <img
          className={styleImg}
          src={require("../images/portada.png")}
          alt=""
        ></img>
      </div>
    </div>
  );
}
