'use strict';

import React from 'react';
import ColumnHelper from './utils/column-helper';

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
    let {headingClick, headingHover} = this.props.events;

    const headings = this.props.columns.map(column =>{
      let columnProperties = ColumnHelper.getColumnPropertyObject(this.props.columnProperties, column);
      return (
          <this.props.components.tableHeadingCell
            column={column}
            headingClick={headingClick}
            headingHover={headingHover}
            title={this.props.columnTitles[column] ?
              this.props.columnTitles[column] :
              column}
            {...columnProperties} />);
      });

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
