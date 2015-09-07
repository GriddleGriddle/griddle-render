import React, { Component, PropTypes } from 'react';

function getExpandColumn(expanded, hasChildren, icons) {
  if(!hasChildren) {
    return { expandColumn: '' }
  }

  return {
    expandColumn: expanded ?
      icons.parentRowExpanded :
      icons.parentRowCollapsed
    };
}

export default RowComponent => class extends Component {
  static PropTypes = {
    components: PropTypes.object.isRequired,
    columnProperties: PropTypes.object.isRequired,
    rowData: PropTypes.object.isRequired
  }

  render() {
    const expandColumn = getExpandColumn(this.props.rowData.expanded,
      this.props.rowData.hasChildren,
      this.props.components.icons);

    //TODO: this should probably have a css class associated with it.
    const expandColumnProperties = {expandColumn:
      {
        id: "expandColumn",
        displayName: ""
      }
    };

    const rowData = Object.assign({}, expandColumn, this.props.rowData);
    const columnProperties = Object.assign({}, expandColumnProperties ,this.props.columnProperties)

    return <RowComponent {...this.props} depth={this.props.rowData.depth || 0} rowData={rowData} columnProperties={columnProperties} />
  }

};