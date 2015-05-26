'use strict';

import React from 'react';
import TableHeading from './table-heading';
import TableBody from './table-body';
import RowDefinition from './row-definition';

class Table extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    //translate the definition object to props for Heading / Body
    return this.props.data.length > 0 ?
      (
        <table>
          <TableHeading columns={Object.keys(this.props.data[0])} columnTitles={this.props.columnTitles} />
          <TableBody {...this.props} />
        </table>
      ) : null;
  }
}

Table.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(RowDefinition)
    // React.PropTypes.arrayOf(React.PropTypes.instanceOf(ColumnDefinition))
  ])
};

Table.contextTypes = {
  data: React.PropTypes.array
};

Table.defaultProps = {
  tableProperties: {
    rowProperties: {},
    columnProperties: []
  }
};

export default Table;
