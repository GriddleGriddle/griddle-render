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
    const initial = this.props.columnTitles[column]  ?
              this.props.columnTitles[column] :
              column;

    return this.props.renderProperties.columnProperties[column] && this.props.renderProperties.columnProperties[column].hasOwnProperty('displayName') ?
        this.props.renderProperties.columnProperties[column].displayName :
        initial
  }

  render() {
    let { headingClick, headingHover } = this.props.events;
    const { renderProperties } = this.props;
    const { style, className } = getStyleProperties(this.props, 'tableHeading');

    const headings = this.props.columns.map(column =>{
      let columnProperty = ColumnHelper.getColumnPropertyObject(renderProperties.columnProperties, column);
      const showColumn = ColumnHelper.isColumnVisible(column, { columnProperties: renderProperties.columnProperties, ignoredColumns: renderProperties.ignoredColumns });
      const sortAscending = this.props.pageProperties && this.props.pageProperties.sortAscending;
      const sorted = this.props.pageProperties && this.props.pageProperties.sortColumns.indexOf(column) > -1

      const title = this.getColumnTitle(column);
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
