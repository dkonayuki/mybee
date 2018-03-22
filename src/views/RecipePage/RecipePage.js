import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Box from '../../components/Box';
import SearchBar from '../../components/SearchBar';
import { discover } from '../../utils/ApiHelper';
import { showError } from '../../actions/alert';

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.timeoutHandle = null;

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQueryChange(value) {
    this.setState({
      query: value
    });

    // after 3s, auto submit
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = setTimeout(this.handleSubmit, 3000);
  }

  async handleSubmit() {
    // clear timeout
    clearTimeout(this.timeoutHandle);

    try {
      const response = await discover(this.props.id, this.state.query);
      console.log(response);
    } catch (error) {
      this.props.onShowError(error.toString());
    }
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
            onSubmit={this.handleSubmit}
          />
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
