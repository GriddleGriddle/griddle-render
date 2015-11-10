import React from 'react';

class TableHeadingCell extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleClick = this._handleClick.bind(this);
    this._handleHover = this._handleHover.bind(this);
  }

  render() {
    //TODO: merge this instead of setting it here
    const style = this.props.alignment || this.props.headerAlignment ? {
      textAlign: this.props.headerAlignment || this.props.alignment,
      ...this.props.style
    } : this.props.style;

    return (
      <th key={this.props.column} style={style} onMouseOver={this._handleHover} onClick={this._handleClick}>
        {this.props.title}
      </th>);
  }

  _handleHover() {
    this.props.headingHover(this.props.column);
  }

  _handleClick() {
    this.props.headingClick(this.props.column);
  }
}

TableHeadingCell.propTypes = {
  headingHover: React.PropTypes.func,
  headingClick: React.PropTypes.func,
  column: React.PropTypes.string,
  headerAlignment: React.PropTypes.oneOf(['left', 'right', 'center']),
  alignment: React.PropTypes.oneOf(['left', 'right', 'center'])
};

export default TableHeadingCell;
