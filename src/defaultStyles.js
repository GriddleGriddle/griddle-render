//This is a method that the individual components will use to interact with the inline styles
//
// styleName: the name of the inline style
// styles: the inline styles object
// useStyles: whether or not the inline styles should be used
// mergeStyles: styles to apply in addition to the inline styling. This is usually applied with some logic in the front-end
export function getStyle({styleName, styles, useStyles, mergeStyles = null}) {
  if (useStyles && styles.hasOwnProperty(styleName)) {
    return Object.assign({}, styles[styleName], mergeStyles);
  }

  return mergeStyles || null;
}

export const inlineStyles = {
  settingsToggle: {
    background: 'none',
    border: 'none',
    padding: 0,
    margin: 0,
    fontSize: 14,
    width: '50%',
    textAlign: 'right'
  },

  filter: {
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
    padding: '5px 5px 5px 5px',
    backgroundColor: '#FFF',
    borderTopColor: '#DDD',
    color: '#222'
  },

  pagination: {
    'padding' : '0',
    border: '0',
    color: '#222',
    width: '100%',
    textAlign: 'center'
  },

  table: {
    width: '100%'
  },

  fixedTable: {
    tableLayout: 'fixed',
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
