'use strict';

import React from 'react';

class GridRow extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <tr>{this.props.children}</tr>
    );
  }
}

export default GridRow;