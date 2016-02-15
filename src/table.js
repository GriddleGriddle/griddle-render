import React, { PropTypes } from 'react';
import RowDefinition from './row-definition';
import { compose, getContext, mapProps } from 'recompose';

const Table = compose(
  getContext({ utils: PropTypes.object }),

  mapProps(props => ({
    style: props.styles.getStyle({
      styles: props.styles.inlineStyles,
      styleName: 'table',
      mergeStyles: props.settings.useFixedTable && props.styles.getStyle({
        styles: props.styles.inlineStyles,
        styleName: 'fixedTable',
      })
    }),

    className: props.utils.getStyleProperties(props, 'table').className,

    useFixedTable: props.settings.useFixedTable,
    columns: props.data.length > 0 ? Object.keys(props.data[0]) : [],
    TableHeading: props.components.TableHeading,
    TableBody: props.components.TableBody,
    data: props.data,
    props: props,
  }))
)(({data, className, style, columns, props, TableHeading, TableBody }) => (
  data.length > 0 ?
    (
      <table
        className={className}
        style={style}
      >
        <TableHeading columns={columns} {...props} />
        <TableBody {...props} />
      </table>
    ) : <span />
))

export default Table;
