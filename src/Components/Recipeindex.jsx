import React from "react";

const Recipeindex = ({ alphaIndex }) => {
  const alpha = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  let num = 0;

  return (
    <>
<div className="border border-purple-600 rounded-xl  my-2 bg-gradient-to-r from-green-200 via-yellow-200 to-blue-200 shadow-2xl ">
<div className="text-center">
<h1 className="text-white font-semibold  text-xl py-2 border-2 border-white px-1 m-2 inline-block rounded-lg bg-green-700">Explore Recipes by Clicking a Letter</h1>
    
</div>
<div className="flex flex-wrap justify-center">
      {alpha.map((item) => (
        <div
          className="numBox m-2 p-3 bg-orange-600 text-white rounded-full cursor-pointer transition-colors hover:bg-green-600 hover:text-white"
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
