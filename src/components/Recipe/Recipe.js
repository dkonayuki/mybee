import React from 'react';
import MyBeePropTypes from '../../data/MyBeePropTypes';

import './Recipe.css';

function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <div className="recipe__image">
        <img src={recipe.imageUrl} alt="" />
      </div>
      <div className="recipe__content">
        <div className="recipe__name">
          {recipe.name}
        </div>
        <div className="recipe__author">
          {recipe.author}
        </div>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  recipe: MyBeePropTypes.recipe
};

Recipe.defaultProps = {
  recipe: null
};

export default Recipe;
