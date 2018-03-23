import PropTypes from 'prop-types';

const recipe = PropTypes.shape({
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  content: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.string
});

const MyBeePropTypes = {
  recipe
};

export default MyBeePropTypes;
