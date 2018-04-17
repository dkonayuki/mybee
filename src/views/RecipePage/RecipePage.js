import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Box from '../../components/Box';
import SearchBar from '../../components/SearchBar';
import {
  chat,
  quickChat
} from '../../utils/ApiHelper';
import { showError } from '../../actions/alert';
import { addMessage } from '../../actions/chat';
import RecipeContainer from '../../components/RecipeContainer';
import Directive from '../../components/Directive';
import CONSTANTS from '../../data/Constants';
import ChatBox from '../../components/ChatBox';

import './RecipePage.css';

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      directives: [],
      recipes: []
    };
    this.timeoutHandle = null;

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuickChat = this.handleQuickChat.bind(this);
    this.updateDirectives = this.updateDirectives.bind(this);
    this.updateRecipes = this.updateRecipes.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await quickChat(this.props.id, CONSTANTS.CHAT.PAYLOAD.START);
      this.updateDirectives(response);

      // add messages to redux store
      const message = response.responseMessage || response.quickReplyMessage;
      this.props.onAddMessage(message, CONSTANTS.CHAT.MESSAGE.TYPE.MYBEE);
    } catch (error) {
      this.props.onShowError(error.toString());
    }
  }

  handleQueryChange(value) {
    this.setState({
      query: value
    });
  }

  async handleSubmit() {
    // add messages to redux store
    this.props.onAddMessage(this.state.query, CONSTANTS.CHAT.MESSAGE.TYPE.USER);

    // clear current query
    this.setState({
      query: ''
    });

    try {
      const response = await chat(this.props.id, this.state.query);
      this.updateRecipes(response);
      this.updateDirectives(response);

      // add messages to redux store
      const message = response.responseMessage || response.quickReplyMessage;
      this.props.onAddMessage(message, CONSTANTS.CHAT.MESSAGE.TYPE.MYBEE);
    } catch (error) {
      this.props.onShowError(error.toString());
    }
  }

  updateRecipes(response) {
    if (response.recipeInfoConceptObject && response.recipeInfoConceptObject.results) {
      let recipes = response.recipeInfoConceptObject.results;
      recipes = recipes.map(recipe => ({
        author: recipe.searchResult.author,
        id: recipe.searchResult.recipeId,
        name: recipe.searchResult.result.basicInfo.name.originalName,
        imageUrl: recipe.searchResult.result.basicInfo.image.photoUrls.originPhotoUrl,
        source: `${CONSTANTS.URL.RECIPE_SOURCE}/${recipe.searchResult.recipeId}`
      }));

      this.setState({
        recipes
      });
    }
  }

  updateDirectives(response) {
    this.setState({
      directives: response.quickReplies || []
    });
  }

  async handleQuickChat(payload, payloadText) {
    // add messages to redux store
    this.props.onAddMessage(payloadText, CONSTANTS.CHAT.MESSAGE.TYPE.USER);

    try {
      const response = await quickChat(this.props.id, payload, payloadText);
      this.updateRecipes(response);
      this.updateDirectives(response);

      // add messages to redux store
      const message = response.responseMessage || response.quickReplyMessage;
      this.props.onAddMessage(message, CONSTANTS.CHAT.MESSAGE.TYPE.MYBEE);
    } catch (error) {
      this.props.onShowError(error.toString());
    }
  }

  render() {
    let recipes = '';
    if (this.state.recipes.length > 0) {
      recipes = this.state.recipes.map(recipe => (
        <RecipeContainer
          key={recipe.id}
          recipe={recipe}
        />
      ));
    }

    let directives = '';
    if (this.state.directives.length > 0) {
      directives = this.state.directives.map(directive => (
        <Directive
          key={directive.title}
          text={directive.title}
          onClick={() => this.handleQuickChat(directive.payload, directive.title)}
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
          <ChatBox />
          {directives &&
            <div className="suggestion-list">
              {directives}
            </div>
          }
          {recipes &&
            <div className="recipe-list">
              {recipes}
            </div>
          }
        </Box>
      </div>
    );
  }
}

RecipePage.propTypes = {
  onAddMessage: PropTypes.func.isRequired, // eslint-disable-line
  onShowError: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired // eslint-disable-line
};

function mapStateToProps(state) {
  const { id } = state.user;
  return { id };
}

export default connect(
  mapStateToProps,
  {
    onShowError: showError,
    onAddMessage: addMessage
  } // mapDispatchToProps
)(RecipePage);
