import React, { useEffect, useState } from "react";
import Mealitems from "./Mealitems";
import Recipeindex from "./Recipeindex";

const Mealsearch = () => {
  const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=s");
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
    <div className="main flex flex-col items-center p-6 min-h-screen bg-gradient-to-r from-green-200 via-yellow-200 to-blue-200">
      <div className="heading text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Search Your Favorite Food Recipe</h1>
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
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {show ? <Mealitems data={item} /> : <p className="text-xl text-gray-600">Not Found</p>}
      </div>
      <div className="indexcontainer mt-12 flex flex-wrap justify-center">
        <Recipeindex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
    </div>
  );
};

export default Mealsearch ;
