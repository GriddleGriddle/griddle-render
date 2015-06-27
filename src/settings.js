'use strict';

import React from 'react';

class CheckItem extends React.Component {
  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    return <label onClick={this._handleClick}><input type="checkbox" checked={this.props.checked} name={this.props.name} />{this.props.text}</label>;
  }

  _handleClick() {
    this.context.toggleColumn(this.props.name);
  }
}

CheckItem.contextTypes = {
  toggleColumn: React.PropTypes.func
};

CheckItem.propTypes = {
  checked: React.PropTypes.bool,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.Number
  ]),
  text: React.PropTypes.string
};

class Settings extends React.Component {
  render() {
    const keys = Object.keys(this.props.data[0]);

    var columns = this.props.allColumns.map(column =>
      <CheckItem
        name={column}
        text={this.props.columnProperties.hasOwnProperty(column) &&
          this.props.columnProperties[column].hasOwnProperty('displayName') ?
            this.props.columnProperties[column].displayName :
            column}
        checked={keys.indexOf(column) > -1} />);

    return (
      <div>
        {columns}
      </div>
    );

  }
}

Settings.propTypes = {
  allColumns: React.PropTypes.arrayOf(React.PropTypes.string),
  visibleColumns: React.PropTypes.arrayOf(React.PropTypes.node)
};

export default Settings;
