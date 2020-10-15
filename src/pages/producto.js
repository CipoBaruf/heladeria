import React from "react";
import "react-slideshow-image/dist/styles.css";

import Navbar from "../components/NavBar";
import SlideContainer from "../components/SlideContainer";

export default function ProductoPage() {
  const slideImages = [
    require("../images/helado1.jpg"),
    require("../images/helado2.jpg"),
    require("../images/helado3.jpg"),
  ];

  return (
    <div className="flex h-screen flex-col">
      <Navbar banner={"banner2"} bannerMobile={"baner-mobile2"} logo={"logo"} />
      <SlideContainer />
    </div>
  );
}
