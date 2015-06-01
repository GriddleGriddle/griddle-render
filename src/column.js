'use strict';

import React from 'react';

class Column extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleClick = this._handleClick.bind(this);
    this._handleHover = this._handleHover.bind(this);
  }

  render() {
    //TODO: this is temporary -- we'll need to merge styles or something
    const styles = this.props.width || this.props.alignment ? {
        width: this.props.width || null,
        textAlign: this.props.alignment
      } :
      null;
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

  _handleClick(e) {
    this.context.columnClick(this.props.dataKey, this.props.value, this.props.rowIndex, this.props.rowData);
  }

  _handleHover(e) {
    this.context.columnHover(this.props.dataKey, this.props.value, this.props.rowIndex, this.props.rowData);
  }
}

Column.defaultProps = {
  columnProperties: {
    cssClassName: ''
  }
};

Column.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'right', 'center'])
};

Column.contextTypes = {
  columnHover: React.PropTypes.func,
  columnClick: React.PropTypes.func
}

export default Column;
