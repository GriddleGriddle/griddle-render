'use strict';

const PropertyHelper = {
  propertiesToJS(row, allColumns) {
    //if we don't have children return an empty metatdata object
    if(!row) {
      return {
        rowProperties: null,
        columnProperties: []
      };
    }

    let columnProperties = {};

    //if an array
    if(!!row.props.children && Array.isArray(row.props.children)) {
      row.props.children.forEach(child => columnProperties[child.props.id] = child.props);
    } else if (row.props.children) {
    //if just an object
      columnProperties[row.props.children.props.id] = row.props.children.props;
    }

    var rowProps = Object.assign({}, row.props);
    delete rowProps.children;

    const visibleKeys = Object.keys(columnProperties);

    //make new column properties for all of the columns that are in the props collection
    //TODO: make a property on griddle that will say only show the columns that have a column definition
    const hiddenColumns = allColumns.filter(column => visibleKeys.indexOf(column) < 0);
    let hiddenColumnProperties = {};
    hiddenColumns.forEach(column => hiddenColumnProperties[column] = {id: column});

    return {
      rowProperties: rowProps,
      columnProperties,
      hiddenColumnProperties
    };
  }
};

export default PropertyHelper;
