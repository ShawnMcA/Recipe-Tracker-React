import React, { useState } from 'react';
import Recipe from './Recipe.js';

const RecipeTracker = () => {
  const [recipes, updateRecipes] = useState([
    { text: 'Recipe 1' },
    { text: 'Recipe 2' },
    { text: 'Recipe 3' },
    { text: 'Recipe 4' },
  ]);

  return(
    <div className="recipe-tracker">
      <div className="recipe-tracker-header">
        <h1>Recipe Tracker</h1>
      </div>
      { 
        recipes.map((recipe, index) => (
          <Recipe 
            key = {index}
            index = {index}
            recipe = {recipe}
          />
        ))
      } 
    </div>
  );
}

export default RecipeTracker;