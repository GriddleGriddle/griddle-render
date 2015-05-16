"use strict";

import React from 'react';
import FakeData from './fake-data';

//http://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

class Filter extends React.Component {
    constructor(props, context) {
      super(props, context);

      this._handleChange = this._handleChange.bind(this);
    }

    render() {
      return (
          <div>
						<input type="text" name="filter" placeholder="filter" onChange={this._handleChange} />
					</div>
      );
    }

		_handleChange(e) {
			//TODO: debounce this
			this.context.setFilter(e.target.value);
		}
}

Filter.contextTypes = {
	setFilter: React.PropTypes.func
}

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
			setFilter: this._filter
    };
  }

  render() {
    if(this.state.data && this.state.data.length === 0) { return <h1>NOTHING!</h1>}

    return (<div><Filter /><Pagination {...this.props} /></div>);
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

}
// Configure the child context types.
Griddle.childContextTypes = {
  getNextPage: React.PropTypes.func,
  getPreviousPage: React.PropTypes.func,
  getPage: React.PropTypes.func,
	setFilter: React.PropTypes.func
};
// Configure the default props.
Griddle.defaultProps = {
  currentPage: 0,
  maxPage: 0
};

export default Griddle;
