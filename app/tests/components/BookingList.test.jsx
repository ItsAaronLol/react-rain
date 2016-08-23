var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var BookingList = require('BookingList');
var Booking = require('Booking');

describe('BookingList', () => {
  it('should exist', () => {
    expect(BookingList).toExist();
  });

  it('should render one Booking component for each booking item', () => {
    var bookings = [{
      id: 1,
      name:'Jom'
    }, {
      id: 2,
      text: 'Bob'
    }];
    var bookingList = TestUtils.renderIntoDocument(<BookingList bookings={bookings}/>);
    var bookingsComponents = TestUtils.scryRenderedComponentsWithType(bookingList, Booking);

    expect(bookingsComponents.length).toBe(bookings.length);

  });
});
