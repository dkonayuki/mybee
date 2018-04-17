import React from 'react';
import PropTypes from 'prop-types';
import MyBeePropTypes from '../../data/MyBeePropTypes';
import Ingredient from '../Ingredient';
import CONSTANTS from '../../data/Constants';

import './Recipe.css';

function Recipe({
  source,
  imageUrl,
  name,
  author,
  description,
  ingredients
}) {
  let ingredientList = ingredients.slice(0, CONSTANTS.INGREDIENT_NUMBER + 1).map(ingredient => (
    <Ingredient
      key={`${name}_${ingredient.display}`}
      {...ingredient}
    />
  ));
  if (ingredients.length > CONSTANTS.INGREDIENT_NUMBER) {
    ingredientList = [...ingredientList, <li key={`${name}_more`}>...</li>];
  }

  return (
    <div className="recipe">
      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="recipe__image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="recipe__content">
          <div className="recipe__name">
            {name}
          </div>
          <div className="recipe__author">
            {author}
          </div>
          <div className="recipe__desc">
            {description}
          </div>
          <div className="recipe_ingredients">
            <ul>
              {ingredientList}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}

Recipe.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  author: PropTypes.string,
  source: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(MyBeePropTypes.ingredient)
};

Recipe.defaultProps = {
  imageUrl: '',
  author: '',
  source: '',
  description: '',
  ingredients: []
};

export default Recipe;
