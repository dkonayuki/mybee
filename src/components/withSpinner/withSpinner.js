import React from 'react';
import Spinner from 'react-spinkit';

import './withSpinner.css';

// return a newly generated React component
// that can show a loading spinner
// isCenter = true means the spinner position is in the middle
function withSpinner(WrappedComponent, isCenter = true) {
  class WithSpinner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false
      };

      this.showSpinner = this.showSpinner.bind(this);
      this.hideSpinner = this.hideSpinner.bind(this);
    }

    showSpinner() {
      this.setState({
        isLoading: true
      });
    }

    hideSpinner() {
      this.setState({
        isLoading: false
      });
    }

    render() {
      // renders the wrapped component with the common methods
      // pass through any additional props
      return (
        <div className={`wrapped-component ${isCenter && this.state.isLoading ? 'component--center' : ''}`}>
          <WrappedComponent
            showSpinner={this.showSpinner}
            hideSpinner={this.hideSpinner}
            {...this.props}
          />
          {this.state.isLoading &&
            <Spinner
              className={isCenter ? 'spinner--center' : ''}
              name="circle"
              fadeIn="none"
            />
          }
        </div>
      );
    }
  }

  WithSpinner.displayName = `withSpinner(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithSpinner;
}

export default withSpinner;
