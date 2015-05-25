'use strict';

import React from 'react';

class TableHeadingCell extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleClick = this._handleClick.bind(this);
    this._handleHover = this._handleHover.bind(this);
  }

  render() {
    return (<th key={this.props.column} onMouseOver={this._handleHover} onClick={this._handleClick}>{this.props.column}</th>);
  }

  _handleHover() {
    this.context.headingHover(this.props.column);
  }

  _handleClick() {
    this.context.headingClick(this.props.column);
  }
}

TableHeadingCell.contextTypes = {
  headingHover: React.PropTypes.func,
  headingClick: React.PropTypes.func
};

TableHeadingCell.propTypes = {
  column: React.PropTypes.string
};

class TableHeading extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    //TODO: Verify that this is correct
    return this.props.columns !== nextProps.columns;
  }

  render() {
    //todo: We will want to look up the value for events metadata instead of using the display value-- we don't have this concept defined yet, though.
    //The logic to get columns should be abstracted
    const headings = this.props.columns.map(column => this.props.columnProperties && this.props.columnProperties.hasOwnProperty(column) ? <TableHeadingCell column={column} /> : null);

    return this.props.columns.length > 0 ? (
      <thead>
        <tr>
          {headings}
        </tr>
      </thead>
    ) : null;
  }

}

export default TableHeading;
