'use strict';

import React from 'react';
import ColumnDefinition from './column-definition';

class RowDefinition extends React.Component {
  render() {
    return null;
  }
}

RowDefinition.propTypes = {
  //Children can be either a single column definition or an array
  //of column definition objects
  children: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(ColumnDefinition),
    React.PropTypes.arrayOf(React.PropTypes.instanceOf(ColumnDefinition))
  ]),
  //The column value that should be used as the key for the row
  //if this is not set it will make one up (not efficient)
  keyColumn: React.PropTypes.string,
  //This property allows an to set a css class on a row based on
  //the data within. This should return a css-class name
  cssFunction: React.PropTypes.func
}

export default RowDefinition;
