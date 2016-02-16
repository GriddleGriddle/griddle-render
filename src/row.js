import React, { PropTypes } from 'react';

import { compose, getContext, mapProps } from 'recompose';

const Row = compose(
  //we are using the utils object from context
  getContext({ utils: PropTypes.object }),

  //Get styleProperties for the next mapProps
  mapProps((props) => ({
    styleProperties: props.utils.getStyleProperties(props, 'row'),

    ...props
  })),

  mapProps(props => ({
    onClick: () => { props.events.rowClick(props.rowData, props.originalRowData); },

    //this is the set of columns to render. we need to determine if there are
    //any columns that should be treated as metadata and ignore them.
    columns: (Object.keys(props.rowData)
      .filter(column => (props.utils.isColumnVisible(column,
        {columnProperties: props.columnProperties, ignoredColumns: props.ignoredColumns || []}
      )))
      .map(column => {
      //get the additional column properties
      const columnProperty = props.utils.getColumnPropertyObject(props.columnProperties, column)
      return (
        <props.components.Column
          {...props}
          key={column}
          originalRowData={props.originalRowData}
          absoluteRowIndex={props.absoluteRowIndex}
          dataKey={column}
          value={props.rowData[column]}
          {...columnProperty}
        />
      );
    })),
    style: props.styleProperties.style,
    className: props.styleProperties.className,
    ...props
  }))
)(({ className, style, onClick, columns, griddleKey }) => (
      <tr
        style={style}
        className={className}
        onClick={onClick}
        key={griddleKey}
      >
        {columns}
      </tr>

));

export default Row;
