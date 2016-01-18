import React from 'react';
import ColumnHelper from './utils/column-helper';
import { getStyleProperties } from './utils/styleHelper';

  class TableHeading extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    //TODO: Verify that this is correct
    return this.props.columns !== nextProps.columns;
  }

  getColumnTitle(column) {
    const { columnTitles, renderProperties } = this.props;
    const { columnProperties } = renderProperties;
    const initial = columnTitles[column] || column;

    if(columnProperties[column] && columnProperties[column].hasOwnProperty('displayName')) {
      return columnProperties[column];
    }

    return initial;
  }

  render() {
    let { headingClick, headingHover } = this.props.events;
    const { TableHeadingCell, renderProperties, columns, pageProperties } = this.props;
    const { columnProperties, ignoredColumns } = renderProperties;
    const { style, className } = getStyleProperties(this.props, 'tableHeading');

    const headings = columns.map(column => {
      let columnProperty = ColumnHelper.getColumnPropertyObject(columnProperties, column);
      const showColumn = ColumnHelper.isColumnVisible(column, {
        columnProperties: columnProperties,
        ignoredColumns: ignoredColumns
      });
      const sortAscending = pageProperties && pageProperties.sortAscending;
      const sorted = pageProperties && pageProperties.sortColumns.indexOf(column) > -1;
      const title = this.getColumnTitle(column);
      let component = null;

      if(showColumn) {
        component = (<TableHeadingCell
            key={column}
            column={column}
            sorted={sorted}
            sortAscending={sortAscending}
            settings={this.props.settings}
            styles={this.props.styles}
            headingClick={headingClick}
            headingHover={headingHover}
            icons={this.props.styles.icons}
            title={title}
            {...columnProperty}
            {...this.props}/>);
      }

      return component;
    });

    return this.props.columns.length > 0 ? (
      <thead style={style} className={className}>
        <tr>
          {headings}
        </tr>
      </thead>
    ) : null;
  }
}

  export default TableHeading;
