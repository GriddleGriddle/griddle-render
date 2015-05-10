'use strict';

import React from 'react';

class GridColumn extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <td>{this.props.value}</td>
    );
  }
}

export default GridColumn;