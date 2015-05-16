var Griddle = require('./src/griddle');
var FakeData = require('./src/fake-data');
var React = require('react');

React.render(<Griddle data={FakeData} maxPage={10} />, document.getElementById('main'));
//React.render(<Griddle />, document.getElementById('secondary'));
