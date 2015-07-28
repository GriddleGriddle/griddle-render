'use strict';

var Griddle = require('./src/griddle');
var FakeData = require('./src/fake-data');
var React = require('react');
var RowDefinition = require('./src/row-definition');
var ColumnDefinition = require('./src/column-definition');
var GriddleContainer = require('./src/containers/app.js');


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
      <GriddleContainer data={FakeData}/>
      <GriddleContainer data={FakeData.reverse()}/>
    </div>
  }
});

React.render(<Test />, document.getElementById('main'));
