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
    const { data, loading, components, styles, settings, events, renderProperties, tableProperties } = this.props;

    const rows = loading ? <components.Loading components={components} styles={styles} settings={settings} events={events} />
        : data
          .filter(data => data.visible === undefined || data.visible === true)
          .map((data, index) =>
            <this.props.components.Row rowData={data}
              absoluteRowIndex={data.__metadata.griddleKey}
              key={data.__metadata.griddleKey}
              components={components}
              events={events}
              rowIndex={index}
              rowProperties={renderProperties.rowProperties}
              originalRowData={this.props.state.data[data.__metadata.griddleKey]}
              styles={styles}
              settings={settings}
              tableProperties={tableProperties}
              ignoredColumns={renderProperties.ignoredColumns}
              columnProperties={renderProperties.columnProperties}
              />
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
