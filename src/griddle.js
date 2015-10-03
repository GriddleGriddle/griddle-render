'use strict';

import React from 'react';
import * as defaultModules from './defaultModules.js';

export default class Griddle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.components = Object.assign({}, defaultModules, this.props.components);

    this.state = {};
    this.state.showSettings = false;
  }

  //TODO: This is okay-ish for the defaults but lets do something to override for plugins... there is stuff here for subgrid and selection and there shouldn't be.
  getEvents() {
    return {
      getNextPage: this._nextPage,
      getPreviousPage: this._previousPage,
      getPage: this._getPage,
      setFilter: this._filter,
      setPageSize: this._setPageSize,
      rowHover: this._rowHover,
      rowSelect: this._rowSelect,
      columnHover: this._columnHover,
      columnClick: this._columnClick,
      headingHover: this._columnHeadingHover,
      headingClick: this._columnHeadingClick,
      toggleColumn: this._toggleColumn,
      expandRow: this._expandRow,
      setScrollPosition: this._setScrollPosition,
      toggleRowSelection: this._toggleRowSelection
    };
  }

  getComponents = () => {
    return this.components
  }

  render() {
    const events = this.getEvents();
    const components = this.getComponents();

    return (
      <div>
        {/*TODO: Lets not duplicate these prop defs all over (events/components) */}
        <this.components.filter {...this.props} components={components} events={events} />
        <this.components.settingsToggle components={components} events={events} showSettings={this._showSettings} />
        {this.state.showSettings ? <this.components.settings {...this.props} components={components} events={events} /> : null }

        {this.props.data && this.props.data.length > 0 ?
          <this.components.table {...this.props} components={components} events={events} /> :
          <this.components.noResults components={components} events={events} /> }

        <this.components.pagination {...this.props} components={components} events={events} />
      </div>
    );
  }

  /*TODO: Move to store */
  _showSettings = (shouldShow) => {
    this.setState({showSettings: shouldShow});
  }

  _nextPage = () => {
    if(this.props.loadNext) {
      this.props.loadNext();
    }
  }

  _previousPage = () => {
    if(this.props.loadPrevious) {
      this.props.loadPrevious();
    }
  }

  _getPage = (pageNumber) => {
    if(this.props.loadPage) {
      this.props.loadPage(pageNumber);
    }
  }

  _filter = (query) => {
    if(this.props.filterData) {
      this.props.filterData(query);
    }
  }

  _setPageSize = (size) => {
    if(this.props.setPageSize) {
      this.props.setPageSize(size);
    }
  }

  _toggleRowSelection = (columnId) => {
    if(this.props.toggleRowSelection) {
      this.props.toggleRowSelection(columnId);
    }
  }

  _toggleColumn = (columnId) => {
    if(this.props.toggleColumn) {
      this.props.toggleColumn(columnId);
    }
  }

  _expandRow = (griddleKey) => {
    if(this.props.expandRow) {
      this.props.expandRow(griddleKey)
    }
  }

  _rowHover = (rowData) => {
    //TODO:
  }

  _rowSelect = (rowData) => {
    //TODO:
  }

  _columnHover = (columnId, columnValue, rowIndex, rowData) => {
    //TODO:
  }

  _columnClick = (columnId, columnValue, rowIndex, rowData) => {
    //TODO:
  }

  _columnHeadingClick = (columnId) => {
    if(this.props.sort) {
      this.props.sort(columnId);
    }
  }

  _columnHeadingHover = (columnId) => {
  }

  _setScrollPosition = (scrollLeft, scrollWidth, scrollTop, scrollHeight) => {
    if(this.props.setScrollPosition) {
      this.props.setScrollPosition(scrollLeft, scrollWidth, scrollTop, scrollHeight);
    }
  }
}

// Configure the default props.
Griddle.defaultProps = {
  currentPage: 0,
  resultsPerPage: 10,
  maxPage: 0
};

Griddle.propTypes = {
  events: React.PropTypes.object,
  data: React.PropTypes.object,
  components: React.PropTypes.object
};