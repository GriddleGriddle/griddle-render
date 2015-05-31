'use strict';

import React from 'react';
import ColumnHelper from './utils/column-helper';

class TableHeadingCell extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleClick = this._handleClick.bind(this);
    this._handleHover = this._handleHover.bind(this);
  }

  render() {
    //TODO: merge this instead of setting it here
    const style = this.props.alignment || this.props.headerAlignment ?
      {textAlign: this.props.headerAlignment || this.props.alignment} :
      null;

    return (<th key={this.props.column} style={style} onMouseOver={this._handleHover} onClick={this._handleClick}>{this.props.title}</th>);
  }

  _handleHover() {
    this.context.headingHover(this.props.column);
  }

  _handleClick() {
    this.context.headingClick(this.props.column);
  }
}

TableHeadingCell.contextTypes = {
  headingHover: React.PropTypes.func,
  headingClick: React.PropTypes.func
};

TableHeadingCell.propTypes = {
  column: React.PropTypes.string,
  headerAlignment: React.PropTypes.oneOf(['left', 'right', 'center']),
  alignment: React.PropTypes.oneOf(['left', 'right', 'center'])
};

class TableHeading extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    //TODO: Verify that this is correct
    return this.props.columns !== nextProps.columns;
  }

  render() {
    const headings = this.props.columns.map(column =>{
      let columnProperties = ColumnHelper.getColumnPropertyObject(this.props.columnProperties, column);

      return (<TableHeadingCell
        column={column}
        title={this.props.columnTitles[column] ?
          this.props.columnTitles[column] :
          column}
          {...columnProperties} />);
      });

    return this.props.columns.length > 0 ? (
      <thead>
        <tr>
          {headings}
        </tr>
      </thead>
    ) : null;
  }

}

export default TableHeading;
