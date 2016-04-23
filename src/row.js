import React, { PropTypes } from 'react';

import { compose, getContext, mapProps, setPropTypes } from 'recompose';

const Row = compose(
  setPropTypes({
    components: PropTypes.shape({
      Column: PropTypes.node.isRequired
    }).isRequired,
    rowData: PropTypes.object.isRequired
  }),

  mapProps(props => ({
    onClick: () => {
      if (props.onClick) {
        onClick(props.rowData, props.originalRowData);
      }
    },

    onHover: () => {
      if (props.onHover) {
        onHover(props.rowData, props.originalRowData);
      }
    },


    //this is the set of columns to render. we need to determine if there are
    //any columns that should be treated as metadata and ignore them.
    columns: (Object.keys(props.rowData)
      .map(column => {
      //get the additional column properties
      return (
        <props.components.Column
          {...props}
          key={column}
          originalRowData={props.originalRowData}
          absoluteRowIndex={props.absoluteRowIndex}
          dataKey={column}
          value={props.rowData[column]}
        />
      );
    })),

    style: props.style,

    className: props.className,

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
