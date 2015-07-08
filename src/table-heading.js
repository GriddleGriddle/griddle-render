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
    const headings = this.props.columns.map(column =>{
      let columnProperties = ColumnHelper.getColumnPropertyObject(this.props.columnProperties, column);
      return (
          <this.context.components.tableHeadingCell
            column={column}
            headingClick={this.context.headingClick}
            headingHover={this.context.headingHover}
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

TableHeading.contextTypes = {
  components: React.PropTypes.object,
  headingClick: React.PropTypes.func,
  headingHover: React.PropTypes.func
}

export default TableHeading;
