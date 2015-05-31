'use strict';

var Griddle = require('./src/griddle');
var FakeData = require('./src/fake-data');
var React = require('react');
var DataComponent = require('./src/data-component');
var RowDefinition = require('./src/row-definition');
var ColumnDefinition = require('./src/column-definition');

let ComposedComponent = DataComponent(Griddle);

var Test = React.createClass({

  render() {
    return (
      <ComposedComponent data={FakeData} >
        <RowDefinition keyColumn="id">
          <ColumnDefinition id="name" displayName="Name" cssClassName="name-class" width="500" headerAlignment="left"/>
          <ColumnDefinition id="state" />
        </RowDefinition>
      </ComposedComponent>
    );
  }
});

React.render(<Test />, document.getElementById('main'));
