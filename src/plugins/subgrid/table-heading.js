import React, { Component, PropTypes } from 'react';

export default TableHeading => class extends Component {
  static PropTypes = {
    renderProperties: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired
  }

  render() {
    const expandColumnProperties = {
      expandColumn: {
        id: 'expandColumn',
      }
    }

    const columns = ['expandColumn', ...this.props.columns]
    const columnTitles = Object.assign({}, {'expandColumn' : ' '}, this.props.columnTitles);
    const columnProperties = Object.assign({}, expandColumnProperties ,this.props.renderProperties.columnProperties)
    const renderProperties = Object.assign({}, this.props.renderProperties);
    renderProperties.columnProperties = columnProperties;

    return <TableHeading {...this.props} columns={columns} renderProperties={renderProperties} columnTitles={columnTitles} />
  }
}