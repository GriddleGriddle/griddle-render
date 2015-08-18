'use strict';

var Griddle = require('./src/griddle');
var FakeData = require('./src/fake-subgrid-data');
var React = require('react');
var RowDefinition = require('./src/row-definition');
var ColumnDefinition = require('./src/column-definition');
var GriddleContainer = require('./src/containers/griddle-redux');

var SubgridRow = require('./src/plugins/subgrid/row');
var Row = require('./src/row');

var RowComponent = SubgridRow(Row);

var SubgridColumn = require('./src/plugins/subgrid/column');
var Column = require('./src/column');

var ColumnComponent = SubgridColumn(Column);

var Something = React.createClass({
  render() {
    return <em>{this.props.data}</em>;
  }
});

var CustomHeadingCell = React.createClass({
  render() {
    return <th onClick={this._handleClick}>
      <div style={{backgroundColor: "#FAB"}}>{this.props.title}</div>
      </th>
  },

  _handleClick() {
    this.props.headingClick(this.props.column);
  }

});

var Test = React.createClass({
  render() {
    return <div>
      <GriddleContainer data={FakeData} components={{row: RowComponent, column: ColumnComponent}}>
        <RowDefinition keyColumn="id">
          <ColumnDefinition id="name" displayName="Name" cssClassName="name-class" width="500" headerAlignment="left" alignment="right" />
          <ColumnDefinition id="state" width="200" alignment="right" customComponent={Something} order={1} />
        </RowDefinition>
      </GriddleContainer>
    </div>
  }
});

React.render(<Test />, document.getElementById('main'));
