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

  it('should call onToggle prop with id on click', () => {
      var bookingData = {
        id: 199,
        text: 'write booking.test.jsx test',
        completed:true
      };
      var spy = expect.createSpy();
      var booking = TestUtils.renderIntoDocument(<Booking {...bookingData} onToggle={spy}/>)
      var $el = $(ReactDOM.findDOMNode(booking));

      TestUtils.Simulate.click($el[0]);

      expect(spy).toHaveBeenCalledWith(199);

  });
});
