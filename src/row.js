import React, { PropTypes } from 'react';

import { compose, getContext, mapProps, setPropTypes } from 'recompose';

import ColumnWrapper from './columnWrapper';

const Row = compose(
  setPropTypes({
    components: PropTypes.shape({
      Column: PropTypes.node.isRequired
    }).isRequired,
    columns: PropTypes.array.isRequired,
    griddleKey: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    onHover: PropTypes.func
  }),

  mapProps(props => ({
    onClick: () => {
      if (props.onClick) {
        onClick(props.griddleKey, props.originalRowData);
      }
    },

    onHover: () => {
      if (props.onHover) {
        onHover(props.rowData, props.originalRowData);
      }
    },

    //this is the set of columns to render. we need to determine if there are
    //any columns that should be treated as metadata and ignore them.
    columns: columns.map(column => <ColumnWrapper key={column} griddleKey={griddleKey} />),

    ...props,
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
