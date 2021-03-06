import React from "react";

import { Link } from "react-router-dom";

import ImageResponsive from "./ImagesResponsive";

function Navbar(props) {
  const { banner, bannerMobile, logo } = props;
  return (
    <div className="relative h-16 md:h-24">
      <div className="absolute flex items-center z-50 h-full">
        <Link to="/">
          <img
            className="h-10 ml-6 md:mt md:h-16"
            src={require(`../images/${logo}.png`)}
            alt=""
          />
        </Link>
      </div>
      <ImageResponsive img={banner} imgMobile={bannerMobile} />
    </div>
  );
}

export default Navbar;
