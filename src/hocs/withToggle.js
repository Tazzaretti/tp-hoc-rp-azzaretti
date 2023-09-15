import React, { Component } from 'react';

const withToggle = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isVisible: false,
      };
    }

    toggleVisibility = () => {
      this.setState((prevState) => ({
        isVisible: !prevState.isVisible,
      }));
    };

    render() {
      return (
        <WrappedComponent
          isVisible={this.state.isVisible}
          toggleVisibility={this.toggleVisibility}
          {...this.props}
        />
      );
    }
  };
};

export default withToggle;