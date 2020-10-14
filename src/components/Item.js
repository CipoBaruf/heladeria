import React from "react";
import { useHistory } from "react-router-dom";

function Item(props) {
  const { name, to } = props;

  const history = useHistory();

  function handleClick() {
    history.push(`${to}`);
  }

  const buttonStyleFocus = "focus:outline-none focus:shadow-xl";
  const buttonStyleMWH =
    "h-32 w-32 md:h-40 md:w-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64";
  const buttonStyle =
    "flex flex-col items-center shadow-lg bg-gray-100 rounded-lg hover:bg-gray-300";
  return (
    <button
      onClick={handleClick}
      className={`${buttonStyle} ${buttonStyleFocus} ${buttonStyleMWH}`}
    >
      <img
        className="w-24 h-24 md:h-32 md:w-32 lg:w-40 lg:h-40 xl:w-56 xl:h-56"
        src={require(`../images/${name}.png`)}
        alt=""
      />
      <p className=" text-xs tracking-tighter text-gray-700 uppercase font-semibold">
        {name}
      </p>
    </button>
  );
}

export default Item;
