  import React from 'react';
  import ColumnHelper from './utils/column-helper';

  class TableHeading extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    //TODO: Verify that this is correct
    return this.props.columns !== nextProps.columns;
  }

  render() {
    let { headingClick, headingHover } = this.props.events;
    const { renderProperties } = this.props;

    const headings = this.props.columns.map(column =>{
      let columnProperty = ColumnHelper.getColumnPropertyObject(renderProperties.columnProperties, column);
      const showColumn = ColumnHelper.isColumnVisible(column, { columnProperties: renderProperties.columnProperties, ignoredColumns: renderProperties.ignoredColumns });
      const sortAscending = this.props.pageProperties && this.props.pageProperties.sortAscending;
      const sorted = this.props.pageProperties && this.props.pageProperties.sortColumns.indexOf(column) > -1

      let component = null;
      if(showColumn) {
        component = (<this.props.components.TableHeadingCell
            key={column}
            column={column}
            sorted={sorted}
            sortAscending={sortAscending}
            settings={this.props.settings}
            styles={this.props.styles}
            headingClick={headingClick}
            headingHover={headingHover}
            icons={this.props.styles.icons}
            title={this.props.columnTitles[column]  ?
              this.props.columnTitles[column] :
              column}
            {...columnProperty}
            {...this.props}/>);
      }

      return component;
    });

    return this.props.columns.length > 0 ? (
      <thead>
        <tr>
          {headings}
        </tr>
      </thead>
    ) : null;
  }
}

  export default TableHeading;
