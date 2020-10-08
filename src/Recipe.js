import React from 'react';

const Recipe = props => {
  const { recipe } = props;

  return (
    <div className="recipe">
      <p>{recipe.text}</p>
    </div>
  );
}

export default Recipe;