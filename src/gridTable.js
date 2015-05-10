'use strict';

import React from 'react';
import DefaultTableHeader from './GridTableHeader';

class GridTable extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <table>
        <this.props.tableHeader />
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}
// Configure the default components.
GridTable.defaultProps = {
  tableHeader: DefaultTableHeader
};

export default GridTable;