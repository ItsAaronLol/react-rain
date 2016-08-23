var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Booking = require('Booking');

describe('Booking', () => {
  it('should exist', () => {
    expect(Booking).toExist();
  });
})
