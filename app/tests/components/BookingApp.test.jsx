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
    expect(bookingApp.state.bookings[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle is called', () => {
    var bookingData = {
      id: 1,
      name: 'Jimmy',
      number: '0422948458',
      date: '20th august',
      time: '5pm',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var bookingApp = TestUtils.renderIntoDocument(<BookingApp/>);
    bookingApp.setState({bookings: [bookingData]});
    expect(bookingApp.state.bookings[0].completed).toBe(false);
    bookingApp.handleToggle(1);
    expect(bookingApp.state.bookings[0].completed).toBe(true);
    expect(bookingApp.state.bookings[0].completedAt).toBeA('number');
  });

  it('should toggle booking from completed to incompleted', () => {
    var bookingData = {
      id: 1,
      name: 'Jimmy',
      number: '0422948458',
      date: '20th august',
      time: '5pm',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    var bookingApp = TestUtils.renderIntoDocument(<BookingApp/>);
    bookingApp.setState({bookings: [bookingData]});
    expect(bookingApp.state.bookings[0].completed).toBe(true);
    bookingApp.handleToggle(1);
    expect(bookingApp.state.bookings[0].completed).toBe(false);
    expect(bookingApp.state.bookings[0].completedAt).toNotExist();
  });
});
