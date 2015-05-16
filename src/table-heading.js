"use strict";

import React from 'react';

class TableHeading extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    //TODO: this may not be correct
    return this.props.columns !== nextProps.columns;
  }

  render() {
    const headings = this.props.columns.map(column => <th key={column}>{column}</th>);

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
