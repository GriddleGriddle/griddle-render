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
      <td key={this.props.value} onClick={this._handleClick} onMouseOver={this._handleHover}>{this.props.value}</td>
    )
  }

  _handleClick(e) {
    this.context.columnClick(this.props.value);
  }

  _handleHover(e) {
    this.context.columnHover(this.props.value);
  }
}

Column.contextTypes = {
  columnHover: React.PropTypes.func,
  columnClick: React.PropTypes.func
}

export default Column;
