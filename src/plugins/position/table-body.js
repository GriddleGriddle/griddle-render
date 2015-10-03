'use strict';

import React from 'react';
import SpacerRow from './spacer-row';

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
      <this.props.components.row
        key={data.griddleKey}
        rowData={data}
        components={this.props.components}
        events={this.props.events}
        rowIndex={index}
        rowProperties={this.props.renderProperties.rowProperties}
        tableProperties={this.props.tableProperties}
        columnProperties={this.props.renderProperties.columnProperties} />
    );

    return (
      <tbody>
        <SpacerRow placement='top' {...this.props} />
        {rows}
        <SpacerRow placement='bottom' {...this.props} />
      </tbody>
    );
  }
}

export default TableBody;
