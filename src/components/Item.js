import React from "react";

function Item(props) {
  const { name } = props;
  return (
    <div className="shadow-xl rounded-lg w-32 h-32 md:h-40 md:w-40 md:mx-8 flex items-center justify-center flex-col">
      <img
        className="h-24 w-24 md:w-32 md:h-32"
        src={require(`../images/${name}.png`)}
        alt=""
      />
      <p className="text-xs tracking-tighter text-gray-600 uppercase font-semibold">
        {name}
      </p>
    </div>
  );
}

export default Item;
