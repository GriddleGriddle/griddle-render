'use strict';

import React from 'react';

import Column from './column';
import Filter from './filter';
import Pagination from './pagination';
import Row from './row';
import Table from './table';
import TableBody from './table-body';
import TableHeading from './table-heading';
import SettingsToggle from './settings-toggle';
import Settings from './settings';
import NoResults from './no-results';
import TableHeadingCell from './table-heading-cell';

const defaultComponents = {
  column: Column,
  filter: Filter,
  pagination: Pagination,
  row: Row,
  table: Table,
  tableBody: TableBody,
  tableHeading: TableHeading,
  tableHeadingCell: TableHeadingCell,
  settingsToggle: SettingsToggle,
  settings: Settings,
  noResults: NoResults
};

class Griddle extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.components = Object.assign({}, defaultComponents, this.props.components);

    this.state = {};
    this.state.showSettings = false;
  }

  getEvents() {
    return {
      getNextPage: this._nextPage,
      getPreviousPage: this._previousPage,
      getPage: this._getPage,
      setFilter: this._filter,
      rowHover: this._rowHover,
      rowSelect: this._rowSelect,
      columnHover: this._columnHover,
      columnClick: this._columnClick,
      headingHover: this._columnHeadingHover,
      headingClick: this._columnHeadingClick,
      toggleColumn: this._toggleColumn,
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

  _showSettings = (shouldShow) => {
    this.setState({showSettings: shouldShow});
  }

  _nextPage = () => {
    if(this.props.events) {
      this.props.events.getNextPage();
    }
  }

  _previousPage = () => {
    if(this.props.events) {
      this.props.events.getPreviousPage();
    }
  }

  _getPage = (pageNumber) => {
    if(this.props.events) {
      this.props.events.getPage(pageNumber);
    }
  }

  _filter = (query) => {
    if(this.props.events) {
      this.props.events.setFilter(query);
    }
  }

  _toggleColumn = (columnId) => {
    if(this.props.events) {
      this.props.events.toggleColumn(columnId);
    }
  }

  _rowHover = (rowData) => {
  }

  _rowSelect = (rowData) => {
  }

  _columnHover = (columnId, columnValue, rowIndex, rowData) => {
  }

  _columnClick = (columnId, columnValue, rowIndex, rowData) => {
  }

  _columnHeadingClick = (columnId) => {
    if(this.props.events) {
      this.props.events.sort(columnId);
    }
  }

  _columnHeadingHover = (columnId) => {
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

export default Griddle;
