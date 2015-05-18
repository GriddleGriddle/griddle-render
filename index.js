var Griddle = require('./src/griddle');
var FakeData = require('./src/fake-data');
var React = require('react');
var DataComponent = require('./src/data-component');

let ComposedComponent = DataComponent(Griddle);

React.render(<ComposedComponent data={FakeData} />, document.getElementById('main'));
