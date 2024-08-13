import React, { useEffect, useState } from "react";
import Mealitem from "./Mealitem";
import Recipeindex from "./Recipeindex";

const Meal = () => {
  const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <div className="main flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="heading text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Search Your Food Recipe</h1>
        <h4 className="scrolling-text text-lg mt-2 text-gray-600 italic">
          Savor Every Bite: The Ultimate Recipe Exploration with TastyQuest
        </h4>
      </div>
      <div className="searchBox mb-10 w-full max-w-lg">
        <input
          type="search"
          placeholder="Search Recipe"
          className="search-bar px-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:border-blue-400"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchRecipe}
        />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {show ? <Mealitem data={item} /> : <p className="text-xl text-gray-600">Not Found</p>}
      </div>
      <div className="indexcontainer mt-12 flex flex-wrap justify-center">
        <Recipeindex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
    </div>
  );
};

export default Meal;
