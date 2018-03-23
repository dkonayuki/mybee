import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Box from '../../components/Box';
import SearchBar from '../../components/SearchBar';
import { discover } from '../../utils/ApiHelper';
import { showError } from '../../actions/alert';
import Recipe from '../../components/Recipe';
import Suggestion from '../../components/Suggestion';

import './RecipePage.css';

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: [],
      recipes: []
    };
    this.timeoutHandle = null;

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuggest = this.handleSuggest.bind(this);
  }

  handleQueryChange(value) {
    this.setState({
      query: value
    });

    clearTimeout(this.timeoutHandle);
    if (value !== '') {
      // after 3s, auto submit
      this.timeoutHandle = setTimeout(this.handleSubmit, 3000);
    }
  }

  async handleSubmit() {
    // clear timeout
    clearTimeout(this.timeoutHandle);

    try {
      const response = await discover(this.props.id, this.state.query);
      let recipes = response.recipeInfoConceptObject.results;
      console.log(response);
      recipes = recipes.map(recipe => ({
        author: recipe.searchResult.author,
        id: recipe.searchResult.recipeId,
        name: recipe.searchResult.result.basicInfo.name.originalName,
        imageUrl: recipe.searchResult.result.basicInfo.image.photoUrls.mediumPhotoUrl
      }));

      this.setState({
        suggestions: response.quickReplies,
        recipes
      });
    } catch (error) {
      this.props.onShowError(error.toString());
    }
  }

  async handleSuggest(payload) {
    console.log(payload);
  }

  render() {
    let recipes = '';
    if (this.state.recipes.length > 0) {
      recipes = this.state.recipes.map(recipe => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
        />
      ));
    }

    let suggestions = '';
    if (this.state.suggestions.length > 0) {
      suggestions = this.state.suggestions.map(suggestion => (
        <Suggestion
          key={suggestion.title}
          text={suggestion.title}
          onClick={() => this.handleSuggest(suggestion.payload)}
        />
      ));
    }

    return (
      <div>
        <Helmet>
          <title>Recipe</title>
        </Helmet>
        <Box
          size="xlarge"
        >
          <SearchBar
            value={this.state.query}
            onChange={this.handleQueryChange}
            onSubmit={this.handleSubmit}
          />
          {suggestions &&
            <div className="suggestion-list">
              {suggestions}
            </div>
          }
          {recipes &&
            <div>
              {recipes}
            </div>
          }
        </Box>
      </div>
    );
  }
}

RecipePage.propTypes = {
  onShowError: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const { id } = state.user;
  return { id };
}

export default connect(
  mapStateToProps,
  { onShowError: showError } // mapDispatchToProps
)(RecipePage);
