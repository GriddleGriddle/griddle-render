'use strict';

import React from 'react';

class TableBody extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  render() {
    var rows = this.props.data
    .filter(data => data.visible === undefined || data.visible === true)
    .map((data, index) =>
      <this.props.components.Row rowData={data}
        components={this.props.components}
        events={this.props.events}
        rowIndex={index}
        rowProperties={this.props.renderProperties.rowProperties}
        styles={this.props.styles}
        settings={this.props.settings}
        tableProperties={this.props.tableProperties}
        ignoredColumns={this.props.renderProperties.ignoredColumns}
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
