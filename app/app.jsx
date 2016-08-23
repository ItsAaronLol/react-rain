var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var BookingApp = require('BookingApp');

// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <BookingApp/>,
  document.getElementById('app')
);

//agile-caverns-86803
