'use strict';

const ColumnHelper = {
  isColumnVisible(columnProperties, column) {
    return ((columnProperties.hasOwnProperty(column) && !columnProperties[column].hidden) ||
    Object.getOwnPropertyNames(columnProperties).length === 0);
  },

  getColumnProperty(columnProperties, column) {
    return columnProperties.hasOwnProperty(column) ? columnProperties[column] : null;
  }
};

export default ColumnHelper;
