'use strict';

import React from 'react';
import FakeData from './fake-data';
import Pagination from './pagination';
import Filter from './filter';
import Table from './table';

class Griddle extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {};

    this._nextPage = this._nextPage.bind(this);
    this._previousPage = this._previousPage.bind(this);
    this._getPage = this._getPage.bind(this);
  }

  getChildContext() {
    return {
      getNextPage: this._nextPage,
      getPreviousPage: this._previousPage,
      getPage: this._getPage,
			setFilter: this._filter,
			rowHover: this._rowHover,
			rowSelect: this._rowSelect,
			columnHover: this._columnHover,
			columnClick: this._columnClick
    };
  }

  render() {
    if(this.state.data && this.state.data.length === 0) { return <h1>NOTHING!</h1>}

    return (
			<div>
				<Filter />
				<Table {...this.props} />
				<Pagination {...this.props} />
			</div>
		);
  }

  _nextPage() {
    debugger;
  }

  _previousPage() {
    debugger;
  }

  _getPage(pageNumber) {
    debugger;
  }

	_filter(query) {
		debugger;
	}

	_rowHover(rowId) {
		//console.log(rowId);
	}

	_rowSelect(rowId) {
		//debugger;
	}

	_columnHover(columnId, rowId) {
		console.log(columnId);
	}

	_columnClick(columnId, rowId) {
		debugger;
	}
}
// Configure the child context types.
Griddle.childContextTypes = {
  getNextPage: React.PropTypes.func,
  getPreviousPage: React.PropTypes.func,
  getPage: React.PropTypes.func,
	setFilter: React.PropTypes.func,
	columnHover: React.PropTypes.func,
	columnClick: React.PropTypes.func,
	rowHover: React.PropTypes.func,
	rowSelect: React.PropTypes.func
};
// Configure the default props.
Griddle.defaultProps = {
  currentPage: 0,
  maxPage: 0
};

export default Griddle;
