'use strict';

import React from 'react';

class Column extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    //TODO: this is temporary -- we'll need to merge styles or something
    const styles = this._getStyles();

    return (
      <td
        style={styles}
        key={this.props.dataKey}
        onClick={this._handleClick}
        onMouseOver={this._handleHover}
        className={this.props.cssClassName||null}>
          {this.props.hasOwnProperty('customComponent') ?
            <this.props.customComponent data={this.props.value} rowData={this.props.rowData} /> :
            this.props.value}
      </td>
    );
  }

  _getStyles = () => {
    return this.props.width || this.props.alignment || this.props.styles ? Object.assign({
        width: this.props.width || null,
        textAlign: this.props.alignment
      }, this.props.styles) :
      null;
  }

  _handleClick = (e) => {
    this.props.events.columnClick(this.props.dataKey, this.props.value, this.props.rowIndex, this.props.rowData);
  }

  _handleHover = (e) => {
    this.props.events.columnHover(this.props.dataKey, this.props.value, this.props.rowIndex, this.props.rowData);
  }
}

Column.defaultProps = {
  columnProperties: {
    cssClassName: ''
  }
};

Column.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'right', 'center']),
  columnHover: React.PropTypes.func,
  columnClick: React.PropTypes.func
};

export default Column;
