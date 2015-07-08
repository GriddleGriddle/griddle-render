'use strict';

import React from 'react';
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
          <this.context.components.tableHeading columns={Object.keys(this.props.data[0])} {...this.props} />
          <this.context.components.tableBody {...this.props} />
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
  data: React.PropTypes.array,
  components: React.PropTypes.object
};

Table.defaultProps = {
  tableProperties: {
    rowProperties: {},
    columnProperties: []
  }
};

export default Table;
