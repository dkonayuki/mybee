import React from 'react';
import PropTypes from 'prop-types';
import { getRecipeInfo } from '../../utils/ApiHelper';
import Recipe from '../Recipe';
import MyBeePropTypes from '../../data/MyBeePropTypes';
import withSpinner from '../withSpinner';
import { connect } from 'react-redux';
import { showError } from '../../actions/alert';

class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: props.recipe
    };
  }

  async componentDidMount() {
    this.props.showSpinner();

    try {
      const info = await getRecipeInfo(this.state.recipe.id);
      const { description } = info.result.recipe.recipe;
      const ingredients = info.result.recipeSummary.ingredients.ingredientRefs.map(ingredient => ({
        name: ingredient.displayIngredient,
        display: ingredient.ingredientLine
      }));

      this.setState({
        recipe: {
          ...this.state.recipe,
          description,
          ingredients
        }
      });

      this.props.hideSpinner();
    } catch (error) {
      this.props.hideSpinner();
      // not display error
      // this.props.onShowError(error.toString());
    }
  }

  render() {
    return (
      <Recipe
        {...this.state.recipe}
      />
    );
  }
}

RecipeContainer.propTypes = {
  onShowError: PropTypes.func.isRequired,
  recipe: MyBeePropTypes.recipe,
  showSpinner: PropTypes.func.isRequired,
  hideSpinner: PropTypes.func.isRequired
};

RecipeContainer.defaultProps = {
  recipe: null
};

export default connect(
  null, // mapStateToProps
  { onShowError: showError } // mapDispatchToProps
)(withSpinner(RecipeContainer));
