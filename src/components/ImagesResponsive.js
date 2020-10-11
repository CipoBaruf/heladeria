import React from "react";

export default function Imagesbanner(props) {
  const { imgMobile, img } = props;
  return (
    <div className="relative h-16 md:h-32">
      <img
        className="absolute h-full  w-screen visible md:invisible"
        src={require(`../images/${imgMobile}.png`)}
        alt=""
      />
      <img
        className="absolute h-full w-screen invisible md:visible"
        src={require(`../images/${img}.png`)}
        alt=""
      />
    </div>
  );
}
