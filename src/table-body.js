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
    var rows = this.props.data
    .filter(data => data.visible === undefined || data.visible === true)
    .map((data, index) =>
      <this.props.components.Row rowData={data}
        key={index}
        components={this.props.components}
        events={this.props.events}
        rowIndex={index}
        rowProperties={this.props.renderProperties.rowProperties}
        styles={this.props.styles}
        settings={this.props.settings}
        tableProperties={this.props.tableProperties}
        ignoredColumns={this.props.renderProperties.ignoredColumns}
        columnProperties={this.props.renderProperties.columnProperties} />
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
