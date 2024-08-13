import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meal from './Componenets/Meal';
import Recipeinfo from './Componenets/RecipeInfo';

function App() {


  return (
    <>
     <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/:MealId" element={<Recipeinfo />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
