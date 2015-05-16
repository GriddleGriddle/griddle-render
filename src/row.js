'use strict';

import React from 'react';
import Column from './column';

class Row extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let columns = [];
    for (var column in this.props.rowData) {
      columns.push(<Column value={this.props.rowData[column]} />);
    }

    return (
      <tr>
        {columns}
      </tr>
    );
  }
}

export default Row;
