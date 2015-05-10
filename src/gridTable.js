'use strict';

import React from 'react';

class GridTable extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <table>
        {this.props.children}
      </table>
    );
  }
}

export default GridTable;