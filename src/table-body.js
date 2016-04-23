import React, { PropTypes } from 'react';
import { compose, shouldUpdate, mapProps, getContext, setPropTypes } from 'recompose';

export function getRowsData(props, utils) {
  const { data, metadata, originalData, loading, components, styles, settings, events } = props;


  return loading ?
    <components.Loading
      components={components}
      styles={styles}
      settings={settings}
      events={events} /> :
    data
      .map((data, index) => {
        return <props.components.Row
          rowData={data}
          absoluteRowIndex={metadata[index].griddleKey}
          key={metadata[index].griddleKey}
          components={components}
          events={events}
          rowIndex={index}
          originalRowData={originalData[index]}
          styles={styles}
          />
      });
}

const TableBody = compose(
  setPropTypes({
    components: PropTypes.shape({
      Loading: PropTypes.node.isRequired,
      Row: PropTypes.node.isRequired,
    }).isRequired,
    data: PropTypes.array.isRequired,
    originalData: PropTypes.array.isRequired,
    metadata: PropTypes.arrayOf(
      PropTypes.shape({
        griddleKey: PropTypes.number.isRequired
      }).isRequired).isRequired
  }),

  shouldUpdate((props, nextProps) => ( props.data !== nextProps.data )),

  mapProps(props => ({
    rows: getRowsData(props, props.utils),
    style: props.style,
    className: props.className
  }))
)(({ style, className, rows }) => (
  <tbody style={style} className={className}>
    {rows}
  </tbody>
));

export default TableBody;
