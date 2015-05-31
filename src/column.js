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
      <td
        key={this.props.dataKey}
        onClick={this._handleClick}
        onMouseOver={this._handleHover}
        className={this.props.cssClassName||null}>
          {this.props.columnProperties && this.props.columnProperties.hasOwnProperty('customComponent') ?
            <this.props.columnProperties.customComponent data={this.props.value} rowData={this.props.rowData} /> :
            this.props.value}
      </td>
    );
  }

  _handleClick(e) {
    this.context.columnClick(this.props.dataKey, this.props.value, this.props.rowIndex, this.props.rowData);
  }

  _handleHover(e) {
    this.context.columnHover(this.props.dataKey, this.props.value, this.props.rowIndex, this.props.rowData);
  }
}

Column.defaultProps = {
  columnProperties: {
    cssClassName: ''
  }
};

Column.contextTypes = {
  columnHover: React.PropTypes.func,
  columnClick: React.PropTypes.func
}

export default Column;
