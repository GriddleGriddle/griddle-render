'use strict';

import React from 'react';
import Column from './column';

class Row extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleHover = this._handleHover.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }

  render() {
    let columns = [];
    for (var column in this.props.rowData) {
      columns.push(<Column rowIndex={this.props.rowIndex} rowData={this.props.rowData} key={column} dataKey={column} value={this.props.rowData[column]} />);
    }

    return (
      <tr onMouseOver={this._handleHover} onClick={this._handleSelect}>
        {columns}
      </tr>
    );
  }

  _handleHover(e) {
    this.context.rowHover(this.props.rowIndex, this.props.rowData);
  }

  _handleSelect(e) {
    this.context.rowSelect(this.props.rowIndex, this.props.rowData);
  }
}

Row.contextTypes = {
  rowHover: React.PropTypes.func,
  rowSelect: React.PropTypes.func
}

export default Row;
