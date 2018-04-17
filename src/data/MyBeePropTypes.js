import PropTypes from 'prop-types';

const ingredient = PropTypes.shape({
  name: PropTypes.string,
  quantityValue: PropTypes.number,
  quantityUnit: PropTypes.string,
  display: PropTypes.string
});

const recipe = PropTypes.shape({
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  source: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(ingredient)
});

const message = PropTypes.shape({
  text: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired
});

const MyBeePropTypes = {
  recipe,
  ingredient,
  message
};

export default MyBeePropTypes;
