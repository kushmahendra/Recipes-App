import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

let videoID="";
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

  
  if(item){
    const url=item.strYoutube;
    const str=url.split("=");
    videoID=str[str.length-1];
  }

  return (
    <>
      {item && (
        <>
          <div className="content content p-8 bg-gradient-to-r from-green-200 via-yellow-200 to-blue-200 shadow-2xl  text-white">
            <div className="button-container text-center mb-6">
              <Link to="/">
                <button className="top-button bg-green-800 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition-all transform hover:scale-105">
                  Home
                </button>
              </Link>
            </div>
            <img
              src={item.strMealThumb}
              alt=""
              className="w-full h-72 object-cover rounded-lg shadow-lg mb-6"
            />
            <div className="inner-content text-center text-orange-800">
              <h1 className="text-3xl font-extrabold">{item.strMeal}</h1>
              <h2 className="text-2xl mt-2">{item.strArea} Food</h2>
              <h3 className="text-xl mt-1">Category: {item.strCategory}</h3>
            </div>
          </div>
          <div className="recipe-details mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="ingredients bg-orange-100 bg-opacity-80 mx-4 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4  text-purple-600">Ingredients</h2>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                const ingredientKey = `strIngredient${index}`;
                const measureKey = `strMeasure${index}`;

                return (
                  item[ingredientKey] && (
                    <ul key={index} className="list-[square] ml-5">
                     <li className="text-lg text-gray-700">
                     {item[ingredientKey]}: {item[measureKey]}
                     </li>
                  </ul>
                  )
                );
              })}
            </div>
            <div className="instructions bg-green-100 mx-4 bg-opacity-80 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-red-500">Instructions</h2>
              {item.strInstructions.split('STEP').filter(Boolean).map((step, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
            {step.trim()}
              </p>
              ))}
           </div>
        </div>
 <div className="container mx-auto my-6 p-4 rounded-lg shadow-lg bg-white max-w-7xl">
  <iframe
    src={`https://www.youtube.com/embed/${videoID}`}
    frameBorder="0"
    className="w-full h-96 rounded-lg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
        </>
      )}
    </>
  );
};

export default Recipeinfo;
