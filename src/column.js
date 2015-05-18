'use strict';

import React from 'react';

class Column extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleClick = this._handleClick.bind(this);
    this._handleHover = this._handleHover.bind(this);
  }

  render() {
    return (
      <td key={this.props.dataKey} onClick={this._handleClick} onMouseOver={this._handleHover}>{this.props.value}</td>
    )
  }

  _handleClick(e) {
    this.context.columnClick(this.props.dataKey, this.props.value, this.props.rowIndex, this.props.rowData);
  }

  _handleHover(e) {
    this.context.columnHover(this.props.dataKey, this.props.value, this.props.rowIndex, this.props.rowData);
  }
}

Column.contextTypes = {
  columnHover: React.PropTypes.func,
  columnClick: React.PropTypes.func
}

export default Column;
