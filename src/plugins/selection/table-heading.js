import React, { Component, PropTypes } from 'react';

export default TableHeading => class extends Component {
  static PropTypes = {
    renderProperties: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired
  }

  render() {
    const expandColumnProperties = {
      selectColumn: {
        id: 'selectColumn',
      }
    }

    const columns = ['selectColumn', ...this.props.columns]
    const columnTitles = Object.assign({}, {'selectColumn' : ' '}, this.props.columnTitles);
    const columnProperties = Object.assign({}, expandColumnProperties ,this.props.renderProperties.columnProperties)
    const renderProperties = Object.assign({}, this.props.renderProperties);
    renderProperties.columnProperties = columnProperties;

    return <TableHeading {...this.props} columns={columns} renderProperties={renderProperties} columnTitles={columnTitles} />
  }
}