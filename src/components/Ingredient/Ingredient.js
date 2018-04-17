import React from 'react';
import PropTypes from 'prop-types';

import './Ingredient.css';

function Ingredient({
  name,
  quantityValue,
  quantityUnit,
  display
}) {
  return (
    <li
      className="ingredient"
    >
      {display}
    </li>
  );
}

Ingredient.propTypes = {
  name: PropTypes.string,
  quantityValue: PropTypes.number,
  quantityUnit: PropTypes.string,
  display: PropTypes.string
};

Ingredient.defaultProps = {
  name: '',
  quantityValue: 0,
  quantityUnit: 'g',
  display: ''
};

export default Ingredient;
