import React from "react";

export default function Imagesbanner(props) {
  const { imgMobile, img } = props;
  return (
    <div className="relative h-16 md:h-32">
      <img
        className="absolute h-full  top-0 left-0 w-screen visible md:invisible"
        src={require(`../images/${imgMobile}.png`)}
        alt=""
      />
      <img
        className="absolute h-full top-0 left-0 w-screen invisiblemd:visible"
        src={require(`../images/${img}.png`)}
        alt=""
      />
    </div>
  );
}
