import React from "react";

function Item(props) {
  const { name } = props;
  const buttonStyleFocus = "focus:outline-none focus:shadow-xl";
  const buttonStyleMWH = "my-2 w-32 h-32 md:h-40 md:w-40 md:mx-8";
  const buttonStyle =
    "flex flex-col  items-center justify-center shadow-lg bg-gray-100 rounded-lg hover:bg-gray-300";
  return (
    <button className={`${buttonStyle} ${buttonStyleFocus} ${buttonStyleMWH}`}>
      <img
        className="h-24 w-24 md:w-32 md:h-32"
        src={require(`../images/${name}.png`)}
        alt=""
      />
      <p className="text-xs tracking-tighter text-gray-700 uppercase font-semibold">
        {name}
      </p>
    </button>
  );
}

export default Item;
