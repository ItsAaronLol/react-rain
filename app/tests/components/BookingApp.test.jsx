var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var BookingApp = require('BookingApp');

describe('BookingApp', () => {
  it('should exist', () => {
    expect(BookingApp).toExist();
  });

  it('should add booking to the bookings state on handleAddBooking', () => {
    var bookingName = 'Jamesbo';
    var bookingNumber = '0433928745';
    var bookingDate = '20th May';
    var bookingTime = '5pm';

    var bookingApp = TestUtils.renderIntoDocument(<BookingApp/>);
    bookingApp.setState({bookings: []});
    bookingApp.handleAddBooking(bookingName, bookingNumber, bookingDate, bookingTime);

    expect(bookingApp.state.bookings[0].name).toBe(bookingName);
  });
});
