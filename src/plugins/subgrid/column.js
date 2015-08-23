'use strict';

import React, { Component } from 'react';

export default ColumnComponent => class extends Component {
  render() {
    const styles = {
      padding: (this.props.depth || 0) * 5
    };

    return <ColumnComponent {...this.props} styles={styles} onClick={this._expandRow} />
  }

  _expandRow = () => {
    debugger;
    this.props.events.expandRow(this.props.rowData.griddleKey)
  }
};