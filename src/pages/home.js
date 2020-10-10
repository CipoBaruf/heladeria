import React from "react";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/categorias");
  }
  return (
    <div className="h-screen">
      <img
        className="absolute z-50 ml-6 mt-6 h-20 md:h-32"
        src={require("../images/logo.png")}
        alt=""
      />
      <div className="absolute flex justify-center items-end  z-50 h-full w-full">
        <button
          className="mb-24 md:mb-8 bg-red-600 hover:bg-red-700 text-white py-1 px-2"
          onClick={handleClick}
        >
          SHOP NOW
        </button>
      </div>
      <div className="relative">
        <img
          className="absolute w-screen  h-screen visible sm:visible md:invisible lg:invisible xl:invisible"
          src={require("../images/portada-mobile.png")}
          alt=""
        ></img>
        <img
          className="absolute h-screen w-screen invisible sm:invisible md:visible lg:visible xl:visible"
          src={require("../images/portada.png")}
          alt=""
        ></img>
      </div>
    </div>
  );
}
