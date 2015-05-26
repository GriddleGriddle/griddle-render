'use strict';

const PropertyHelper = {
  propertiesToJS(row) {
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

    return {
      rowProperties: rowProps,
      columnProperties
    };
  }
};

export default PropertyHelper;
