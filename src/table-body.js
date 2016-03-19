import React, { PropTypes } from 'react';
import { compose, shouldUpdate, mapProps, getContext } from 'recompose';

export function getRowsData(props, utils) {
  const { data, loading, components, styles, settings, events, renderProperties, tableProperties } = props;


  return loading ?
    <components.Loading
      components={components}
      styles={styles}
      settings={settings}
      events={events} /> :
    data
      .filter(data => data.visible === undefined || data.visible === true)
      .map((data, index) => {
        const metadata = props.metadata[index];
        const currentPageData = props.currentPageData[index];

        return <props.components.Row
          rowData={data}
          absoluteRowIndex={metadata.griddleKey}
          key={metadata.griddleKey}
          components={components}
          events={events}
          rowIndex={index}
          rowProperties={renderProperties.rowProperties}
          originalRowData={currentPageData}
          styles={styles}
          settings={settings}
          tableProperties={tableProperties}
          ignoredColumns={renderProperties.ignoredColumns}
          columnProperties={renderProperties.columnProperties}
          />
      });
}

const TableBody = compose(
  getContext({
    utils: PropTypes.object,
  }),

  shouldUpdate((props, nextProps) => ( props.data !== nextProps.data )),

  mapProps(props => ({
    styleProperties: props.utils.getStyleProperties(props, 'tableBody'),
    ...props
  })),

  mapProps(props => ({
    rows: getRowsData(props, props.utils),
    style: props.styleProperties.style,
    className: props.styleProperties.className
  }))
)(({ style, className, rows }) => (
  <tbody style={style} className={className}>
    {rows}
  </tbody>
));

export default TableBody;
