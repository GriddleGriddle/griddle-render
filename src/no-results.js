import React from 'react';
import {getStyleProperties}  from './utils/styleHelper';

class NoResults extends React.Component {
  render() {
    const { style, className } = getStyleProperties(this.props, 'noResults');

    return (
      <div style={style} className={className}>
        <h4>No results found.</h4>
      </div>
    )
  }
}

export default NoResults;
