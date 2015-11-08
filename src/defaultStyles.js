export const inlineStyles = {
  settingsButton: { 
    background: 'none',
    border: 'none',
    padding: 0,
    margin: 0,
    fontSize: 14
  },

  filter: {
    'float': 'left',
    width: '50%',
    textAlign: 'left',
    color: '#222',
    minHeight: '1px'
  },

  columnTitle: {
    backgroundColor: '#EDEDEF',
    border: '0',
    borderBottom: '1px solid #DDD',
    color: '#222',
    padding: '5px',
    cursor: 'pointer'
  },

  column: {
    margin: '0',
    padding: that.props.paddingHeight + 'px 5px ' + that.props.paddingHeight + 'px 5px',
    height: that.props.rowHeight? this.props.rowHeight - that.props.paddingHeight * 2 + 'px' : null,
    backgroundColor: '#FFF',
    borderTopColor: '#DDD',
    color: '#222'
  },

  paging: {
    'padding' : '0',
    backgroundColor: '#EDEDED',
    border: '0',
    color: '#222'
  },

  tableFixed: {
    tableLayout: 'fixed'
  }
}

export const classNames = {
  column: 'griddle-column',
  filter: 'griddle-filter',
  noResults: 'griddle-noResults',
  pagination: 'griddle-pagination',
  rowDefinition: 'griddle-row-definition',
  row: 'griddle-row',
  settingsToggle: 'griddle-settings-toggle',
  settings: 'griddle-settings',
  tableBody: 'griddle-table-body',
  tableHeading: 'griddle-table-heading',
  tableHeadingCell: 'griddle-table-heading-cell',
  table: 'griddle-table'
}

export const icons = {
  //TODO: these need to get moved to something that adds these on as part of the subgrid 'plugin'
  parentRowCollapsed: '▶',
  parentRowExpanded: '▼',
  sortDescending: '▼',
  sortAscending: '▲'
};
