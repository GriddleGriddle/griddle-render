import React, { Component } from 'react';

export default ColumnComponent => class extends Component {
  render() {
    console.log(this.props.rowData.selected);
    return <ColumnComponent {...this.props} onClick={this._toggleSelection} />
  }

  _toggleSelection = () => {
    const { events, rowData } = this.props;
    events.toggleRowSelection(rowData.griddleKey);
  }
};