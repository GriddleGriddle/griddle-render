'use strict';

import React from 'react';
import * as defaultModules from './defaultModules';
import { getAssignedStyles } from './defaultStyles';
import * as defaultSettings from './defaultSettings';
import { arraysEqual } from './utils/arrayHelper';
import { getStyleProperties } from './utils/styleHelper';
import ColumnHelper from './utils/column-helper';

export default class Griddle extends React.Component {
  static childContextTypes = {
    utils: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.wireUpSettings(props);
    this.state = { showSettings: false };
  }

  getChildContext() {
    return {
      utils: {
        getStyleProperties,
        isColumnVisible: ColumnHelper.isColumnVisible,
        getColumnPropertyObject: ColumnHelper.getColumnPropertyObject,
        arraysEqual: arraysEqual,
        getOriginalRowData: (rowIndex) => {
          return this.props.state.data[rowIndex]
        },
        getMetadata: (rowIndex) => {
          const row = this.props.data[rowIndex];
          return row ? row.__metadata : {}
        }
      }
    };
  }

  wireUpSettings = (props) => {
    this.settings = Object.assign({}, defaultSettings, props.settings);
    this.components = Object.assign({}, defaultModules, props.components);
    this.styles = getAssignedStyles(props.style, this.settings.useGriddleStyles);
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
      rowClick: this._rowClick,
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
    debugger;
    const events = this.getEvents();
    const components = this.getComponents();
    const { styles, settings } = this;

    return (
      <div>
        {/*TODO: Lets not duplicate these prop defs all over (events/components) */}
        <this.components.Filter {...this.props} components={components} styles={styles} settings={settings} events={events} />
        <this.components.SettingsToggle components={components} styles={styles} events={events} settings={settings} showSettings={this._showSettings} />
        {this.state.showSettings ? <this.components.Settings {...this.props} components={components} styles={styles} settings={settings} events={events} /> : null }

        {this.props.data && this.props.data.length > 0 ?
          <this.components.Table {...this.props} components={components} styles={styles} settings={settings} events={events} /> :
          <this.components.NoResults components={components} styles={styles} settings={settings} events={events} /> }

        <this.components.Pagination {...this.props} components={components} styles={styles} settings={settings} events={events} />
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

  _rowClick = (rowData, originalRowData) => {
    //TODO: lets make a function for getting these chains of 'does this property exist?'
    if(this.props.renderProperties && this.props.renderProperties.rowProperties && this.props.renderProperties.rowProperties.onClick) {
      this.props.renderProperties.rowProperties.onClick(rowData, originalRowData);
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
    const { setScrollPosition, positionConfig, loadNext} = this.props;
    if(setScrollPosition) {
      setScrollPosition(scrollLeft, scrollWidth, scrollTop, scrollHeight);
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
  data: React.PropTypes.array,
  components: React.PropTypes.object
};
