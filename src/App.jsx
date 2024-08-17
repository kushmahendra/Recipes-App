import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mealsearch from './Components/MealSearch';
import Recipeinfo from './Components/RecipeInfo';

function App() {


  return (
    <>
     <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mealsearch  />} />
          <Route path="/:MealId" element={<Recipeinfo />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
