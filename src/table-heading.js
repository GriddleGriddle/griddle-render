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
      let component = null;
      if(showColumn) {
        component = (<this.props.components.TableHeadingCell
            key={column}
            column={column}
            headingClick={headingClick}
            headingHover={headingHover}
            title={this.props.columnTitles[column]  ?
              this.props.columnTitles[column] :
              column}
            {...columnProperty} />);
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
