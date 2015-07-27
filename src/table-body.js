'use strict';

import React from 'react';
import Row from './row';

class TableBody extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  render() {
    var rows = this.props.data.map((data, index) =>
      <Row rowData={data}
        events={this.props.events}
        rowIndex={index}
        rowProperties={this.props.renderProperties.rowProperties}
        tableProperties={this.props.tableProperties}
        columnProperties={this.props.renderProperties.columnProperties} />
    );

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
}

export default TableBody;
