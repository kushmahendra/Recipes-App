import React from "react";
import { useNavigate } from "react-router-dom";

const Mealitems = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      {!data ? (
        "Not Found"
      ) : (
        data.map((item) => (
          <div
            className="card bg-white shadow-lg rounded-lg p-6 cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
            key={item.idMeal}
            onClick={() => navigate(`/${item.idMeal}`)}
          >
            <img
              src={item.strMealThumb}
              alt=""
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">{item.strMeal}</h3>
          </div>
        ))
      )}
    </>
  );
};

export default Mealitems;
