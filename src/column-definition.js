'use strict';

import React from 'react';

class ColumnDefinition extends React.Component {
  render() {
    return null;
  }
}

ColumnDefinition.PropTypes = {
  //this is the name of the column that this definition applies to.
  //This used to be known as columnName
  id: React.PropTypes.string.isRequired,
  //The order that this column appears in. If not specified will just use the order that they are defined
  order: React.PropTypes.number,
  //Determines whether or not the user can disable this column from the settings.
  locked: React.PropTypes.bool,
  //The css class name to apply to this column.
  cssClassName: React.PropTypes.string,
  //The display name for the column. This is used when the name in the column heading and settings should be different from the data passed in to the Griddle component.
  displayName: React.PropTypes.string,
  //The component that should be rendered instead of the standard column data. This component will still be rendered inside of a TD element.
  customComponent: React.PropTypes.object
};

export default ColumnDefinition;
