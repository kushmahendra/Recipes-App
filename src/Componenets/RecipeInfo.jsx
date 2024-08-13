import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Recipeinfo = () => {
  const [item, setItem] = useState(null);
  const { MealId } = useParams();

  useEffect(() => {
    const fetchMealInfo = async () => {
      if (MealId !== "") {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`
          );
          const data = await response.json();
          setItem(data.meals[0]);
        } catch (error) {
          console.error("Error fetching meal information:", error);
        }
      }
    };

    fetchMealInfo();
  }, [MealId]);

  return (
    <>
      {item && (
        <>
          <div className="content p-6 bg-white shadow-md rounded-lg">
            <div className="button-container mb-4">
              <Link to="/">
                <button className="top-button bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                  Home
                </button>
              </Link>
            </div>
            <img
              src={item.strMealThumb}
              alt=""
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="inner-content">
              <h1 className="text-3xl font-bold text-gray-800">{item.strMeal}</h1>
              <h2 className="text-2xl text-gray-600 mt-2">{item.strArea} Food</h2>
              <h3 className="text-xl text-gray-600 mt-2">Category: {item.strCategory}</h3>
            </div>
          </div>
          <div className="recipe-details mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="ingredients">
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                const ingredientKey = `strIngredient${index}`;
                const measureKey = `strMeasure${index}`;

                return (
                  item[ingredientKey] && (
                    <ul key={index} className="list-disc ml-5">
                      <li className="text-lg text-gray-700">
                        {item[ingredientKey]}: {item[measureKey]}
                      </li>
                    </ul>
                  )
                );
              })}
            </div>
            <div className="instructions">
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <h4 className="text-lg text-gray-700 leading-relaxed">{item.strInstructions}</h4>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Recipeinfo;
