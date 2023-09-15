import React from 'react';

const withTooltip = (WrappedComponent, tooltipText) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showTooltip: false,
      };
    }

    handleMouseEnter = () => {
      this.setState({ showTooltip: true });
    };

    handleMouseLeave = () => {
      this.setState({ showTooltip: false });
    };

    render() {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.state.showTooltip && (
            <div className="tooltip">{tooltipText}</div>
          )}
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withTooltip;