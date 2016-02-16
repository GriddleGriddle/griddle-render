import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { compose, getContext, mapProps } from 'recompose';

function isSortable(props) {
  const { column, renderProperties } = props;
  const columnProperties = renderProperties.columnProperties[column];

  if(columnProperties &&
    columnProperties.hasOwnProperty('sortable') &&
    columnProperties.sortable === false) {

    return false;
  }

  return true;
}

const TableHeadingCell = compose(
  getContext({ utils: PropTypes.object }),

  mapProps(props => ({
    sortable: isSortable(props),
    ...props
  })),

  mapProps(props => ({
    handleClick: (props.sortable ? (() => props.headingClick(props.column)) : null),

    handleHover: props.events.headingHover(props.column),

    sortIcon: props.sorted ?
      (props.sortAscending ? props.icons.sortAscending : props.icons.sortDescending) :
      null,

    style: props.styles.getStyle({
        styles: props.styles.inlineStyles,
        styleName: 'columnTitle',
        mergeStyles: {
          width: props.columnProperty.width,
          ...(props.alignment || props.headerAlignment ? {textAlign: props.headerAlignment || props.alignment} : {}),
          ...props.style
        }
      }),

    className: classnames(
      props.utils.getStyleProperties(props, 'tableHeadingCell'),
      props.columnProperty ? props.columnProperty.headerCssClassName : null),

    ...props
  }))
)(({ column, style, handleHover, handleClick, title, sortIcon, className}) => (
  <th
    key={column}
    style={style}
    onMouseOver={handleHover}
    onClick={handleClick}
    className={className}
  >
    { title } { sortIcon }
  </th>
))

export default TableHeadingCell;
