import React from 'react';
import { Helmet } from 'react-helmet';
import Box from '../../components/Box';
import SearchBar from '../../components/SearchBar';

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(value) {
    this.setState({
      query: value
    });
  }

  render() {
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
          />
        </Box>
      </div>
    );
  }
}

export default RecipePage;
