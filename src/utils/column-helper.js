'use strict';

const ColumnHelper = {
  isColumnVisible(columnProperties, column) {
    return ((columnProperties.hasOwnProperty(column) && !!columnProperties[column].hidden) ||
    Object.getOwnPropertyNames(columnProperties).length === 0);
  }
};

export default ColumnHelper;
