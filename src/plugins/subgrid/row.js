'use strict';

import React, { Component } from 'react';

export default RowComponent => class extends Component {
  render() {
    return <RowComponent {...this.props} depth={this.props.rowData.depth || 0}/>
  }
};