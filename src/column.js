'use strict';

import React from 'react';

class Column extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <td key={this.props.value}>{this.props.value}</td>
    )
  }
}

export default Column;
