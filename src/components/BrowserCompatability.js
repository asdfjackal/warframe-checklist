import React, { Component, PropTypes } from 'react';

class BrowserCompatability extends Component {
  render(){
    if (typeof(Storage) !== "undefined") {
      return this.props.children;
    } else {
      return (
        <p>Your browser does not support HTML5 localStorage. Please update your browser to the newest version or try a new browser.</p>
      );
    }
  }
}

BrowserCompatability.propTypes = {
  children: PropTypes.element.isRequired,
}

export default BrowserCompatability;
