import React from 'react';
import { getStyleProperties } from './utils/styleHelper';

class TableBody extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  render() {
    const { Row, components, events, styles, settings, renderProperties, tableProperties } = this.props;
    const childProps = { components, events, styles, settings, tableProperties };
    var rows = this.props.data
    .filter(data => data.visible === undefined || data.visible === true)
    .map((data, index) =>
      <Row rowData={data}
        key={index}
        rowIndex={index}
        rowProperties={renderProperties.rowProperties}
        ignoredColumns={renderProperties.ignoredColumns}
        columnProperties={renderProperties.columnProperties}
        {...childProps} />
    );

    const { style, className } = getStyleProperties(this.props, 'tableBody');

    return (
      <tbody style={style} className={className}>
        {rows}
      </tbody>
    );
  }
}

export default TableBody;
