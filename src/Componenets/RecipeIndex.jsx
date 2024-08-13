import React from "react";

const Recipeindex = ({ alphaIndex }) => {
  const alpha = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  let num = 0;

  return (
    <div className="flex flex-wrap justify-center">
      {alpha.map((item) => (
        <div
          className="numBox m-2 p-3 bg-blue-100 text-blue-600 rounded-full cursor-pointer transition-colors hover:bg-blue-600 hover:text-white"
          key={num++}
          onClick={() => alphaIndex(item)}
        >
          <h3 className="text-xl font-semibold">{item}</h3>
        </div>
      ))}
    </div>
  );
};

export default Recipeindex;
