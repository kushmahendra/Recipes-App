import React from "react";

const Recipeindex = ({ alphaIndex }) => {
  const alpha = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  let num = 0;

  return (
    <>
<div className="border border-purple-600 rounded-xl my-2 bg-gradient-to-r from-purple-300 via-white to-orange-100">
<h1 className="text-gray-600 font-semibold text-xl py-2 border-2 border-white px-1 m-2 inline-block rounded-lg bg-orange-300">Explore Recipes by Clicking a Letter</h1>
    <div className="flex flex-wrap justify-center">
      {alpha.map((item) => (
        <div
          className="numBox m-2 p-3 bg-blue-100 text-blue-600 rounded-full cursor-pointer transition-colors hover:bg-green-600 hover:text-white"
          key={num++}
          onClick={() => alphaIndex(item)}
        >
          <h3 className="text-xl font-semibold">{item}</h3>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Recipeindex;
