import React, { Component, PropTypes } from 'react';

class SelectColumn extends Component {
  static propTypes = {
    griddleKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    selected: PropTypes.bool,
    events: PropTypes.object
  }

  render() {
    const { griddleKey, selected } = this.props;
   
    return selected ?
      <input type="checkbox" checked onClick={this._toggleSelection} /> :
      <input type="checkbox" onClick={this._toggleSelection} />
  }

  _toggleSelection = () => {
    const { events, griddleKey } = this.props;
    events.toggleRowSelection(griddleKey);
  }
}

function getSelectColumn(selected, griddleKey, events) {
  const checkbox = <SelectColumn 
    griddleKey={griddleKey}
    selected={selected}
    events={events} />

  return { expandColumn: checkbox  }
}

export default RowComponent => class extends Component {
  static PropTypes = {
    components: PropTypes.object.isRequired,
    columnProperties: PropTypes.object.isRequired,
    rowData: PropTypes.object.isRequired
  }

  render() {
    const { rowData } = this.props;

    const expandColumn = getSelectColumn(rowData.selected, rowData.griddleKey, this.props.events);
 
    //TODO: this should probably have a css class associated with it.
    const expandColumnProperties = {
      expandColumn:
        {
          id: "expandColumn",
          displayName: ""
        }
    };

    const newRowData = Object.assign({}, expandColumn, rowData);
    const columnProperties = Object.assign({}, expandColumnProperties ,this.props.columnProperties)

    return <RowComponent {...this.props} depth={rowData.depth || 0} rowData={newRowData} columnProperties={columnProperties} />
  }

};
