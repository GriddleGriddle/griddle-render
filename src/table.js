'use strict';

import React from 'react';
import TableHeading from './table-heading';
import TableBody from './table-body';

class Table extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return this.props.data.length > 0 ?
      (
        <table>
          <TableHeading columns={Object.keys(this.props.data[0])} />
          <TableBody {...this.props} />
        </table>
      ) : null;
  }
}

Table.contextTypes = {
  data: React.PropTypes.array
}

export default Table;
