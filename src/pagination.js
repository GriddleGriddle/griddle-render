"use strict";

import React from 'react'

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    return (<div className="pagination">
      <button onClick={this.context.getPreviousPage}>Next</button>
      {this._getSelect()}
      <button onClick={this.context.getNextPage}>Next</button>
    </div>);
  }

  _handleChange(e) {
    this.context.getPage(e.target.value);
  }

  _getSelect() {
    //Make this nicer
    var options = [];

    for(var i = 1; i <= this.props.maxPage; i++) {
      options.push(<option value={i} key={i}>{i}</option>)
    }

    return <select onChange={this._handleChange}>{options}</select>
  }
}

Pagination.contextTypes = {
  getNextPage: React.PropTypes.func,
  getPreviousPage: React.PropTypes.func,
  getPage: React.PropTypes.func
}

export default Pagination;
