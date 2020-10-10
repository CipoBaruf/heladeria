import React from "react";

export default function Imagesbanner(props) {
  const { imgMobile, img } = props;
  return (
    <div className="relative h-16 md:h-24">
      <img
        className="absolute h-full w-screen visible sm:visible md:invisible lg:invisible xl:invisible"
        src={require(`../images/${imgMobile}.png`)}
        alt=""
      />
      <img
        className="absolute h-full w-screen invisible sm:invisible md:visible lg:visible xl:visible"
        src={require(`../images/${img}.png`)}
        alt=""
      />
    </div>
  );
}
