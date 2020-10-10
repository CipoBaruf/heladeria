import React from "react";

function Navbar(props) {
  const { banner, bannerMobile, logo } = props;
  return (
    <div className="relative h-16 md:h-24">
      <div className="absolute flex items-center z-50 h-full">
        <img
          className="h-10 ml-6 md:h-16"
          src={require(`../images/${logo}.png`)}
          alt=""
        />
      </div>
      <img
        className="absolute h-full w-screen visible sm:visible md:invisible lg:invisible xl:invisible"
        src={require(`../images/${bannerMobile}.png`)}
        alt=""
      ></img>
      <img
        className="absolute h-full w-screen invisible sm:invisible md:visible lg:visible xl:visible"
        src={require(`../images/${banner}.png`)}
        alt=""
      ></img>
    </div>
  );
}

export default Navbar;
