import React, { PropTypes } from 'react';
import ColumnHelper from './utils/column-helper';
import { getStyleProperties } from './utils/styleHelper';

import { compose, getContext, mapProps, shouldUpdate } from 'recompose';

function getColumnTitle(column, props) {
  const initial = props.columnTitles[column]  ?
            props.columnTitles[column] :
            column;

  return props.renderProperties.columnProperties[column] &&
    props.renderProperties.columnProperties[column].hasOwnProperty('displayName') ?
      props.renderProperties.columnProperties[column].displayName :
      initial
}

const TableHeading = compose(
  getContext({ utils: PropTypes.object }),

  shouldUpdate((props, nextProps) => (
    (!props.utils.arraysEqual(props.columns, nextProps.columns) ||
      ((props.pageProperties && nextProps.pageProperties) &&
        (!props.utils.arraysEqual(props.pageProperties.sortColumns, nextProps.pageProperties.sortColumns) ||
        props.pageProperties.sortAscending !== nextProps.pageProperties.sortAscending)
      )
    )
  )),

  mapProps((props) => ({
    styleProperties: props.utils.getStyleProperties(props, 'tableHeading'),
    headingClick: props.events.headingClick,
    headingHover: props.events.headingHover,
    ...props
  })),

  mapProps(props => ({
    headings: props.columns
    .filter(column => (props.utils.isColumnVisible(column,
      { columnProperties: props.renderProperties.columnProperties,
        ignoredColumns: props.renderProperties.ignoredColumns
      })))
    .map(column => {
      let columnProperty = props.utils.getColumnPropertyObject(props.renderProperties.columnProperties, column);
      const sortAscending = props.pageProperties && props.pageProperties.sortAscending;
      const sorted = props.pageProperties && props.pageProperties.sortColumns.indexOf(column) > -1;

      const title = getColumnTitle(column, props);
      return <props.components.TableHeadingCell
        key={column}
        column={column}
        sorted={sorted}
        sortAscending={sortAscending}
        settings={props.settings}
        styles={props.styles}
        headingClick={props.headingClick}
        headingHover={props.headingHover}
        icons={props.styles.icons}
        title={title}

        columnProperty={columnProperty}
        {...columnProperty}

        {...props}
      />
    }),

    style: props.styleProperties.style,

    className: props.styleProperties.className
  }))
)(({ style, className, headings, ...props }) => (
  <thead style={style} className={className}>
    <tr>
      {headings}
    </tr>
  </thead>
));

export default TableHeading;
