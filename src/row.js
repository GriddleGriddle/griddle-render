'use strict';

import React from 'react';
import Column from './column';
import ColumnHelper from './utils/column-helper';

class Row extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleHover = this._handleHover.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }

  render() {
    //TODO: refactor -- this whole method is kind of rought
    let columns = [];
    let { columnProperties, tableProperties, rowData, events, rowIndex} = this.props;

    //render just the columns that are contained in the metdata
    for (var column in rowData) {
      //get the additional properties defined in the creation of the object
      let localColumnProperties = ColumnHelper.getColumnPropertyObject(columnProperties, column);
      //render the column if there are no properties, there are properties and the column is in the collection OR there are properties and no column properties.
      if(tableProperties === null || tableProperties.columnProperties.length === 0 || ColumnHelper.isColumnVisible(tableProperties.localColumnProperties, column)) {
        columns.push(<Column
          rowIndex={rowIndex}
          rowData={this.props.rowData}
          events={events}
          key={column}
          dataKey={column}
          value={rowData[column]}
          {...localColumnProperties} />);
      }
    }

    return (
      <tr onMouseOver={this._handleHover} onClick={this._handleSelect}>
        {columns}
      </tr>
    );
  }

  _handleHover(e) {
    this.props.events.rowHover(this.props.rowIndex, this.props.rowData);
  }

  _handleSelect(e) {
    this.props.events.rowSelect(this.props.rowIndex, this.props.rowData);
  }
}

export default Row;
