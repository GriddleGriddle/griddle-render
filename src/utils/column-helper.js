'use strict';

//TODO: Why is this even used?
const ColumnHelper = {
  isColumnVisible(columnProperties, column) {
    if(!columnProperties) { return true; }

    return ((columnProperties.hasOwnProperty(column) && !columnProperties[column].hidden) ||
    Object.getOwnPropertyNames(columnProperties).length === 0);
  },

  //this gets one column property object from the global property object
  getColumnPropertyObject(columnProperties, columnName) {
    return columnProperties.hasOwnProperty(columnName) ?
      columnProperties[columnName] :
      null;
  }
};

export default ColumnHelper;
