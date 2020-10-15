import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import DataProducto from "../components/DataProducto";

export default function SlideContainer(children) {
  const slideImages = [
    require("../images/helado1.jpg"),
    require("../images/helado2.jpg"),
    require("../images/helado3.jpg"),
  ];

  const properties = {
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <div className="slide-container flex-1 flex-col felx bg-red-800">
      <Slide
        className="h-full flex-1 bg-orange-600 flex flex-col"
        easing="ease"
        {...properties}
      >
        <div className="h-full  ">
          <div
            className="w-screen bg-cover bg-center h-full flex-grow"
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          >
            <DataProducto />
          </div>
        </div>
        <div className="h-full  ">
          <div
            className="w-screen bg-cover bg-center h-full flex-grow"
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          >
            <DataProducto />
          </div>
        </div>
        <div className="h-full  ">
          <div
            className="w-screen bg-cover bg-center h-full flex-grow"
            style={{ backgroundImage: `url(${slideImages[2]})` }}
          >
            <DataProducto />
          </div>
        </div>
      </Slide>
    </div>
  );
}
