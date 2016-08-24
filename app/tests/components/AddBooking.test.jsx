var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddBooking = require('AddBooking');

describe('AddBooking', () => {
  it('should exist', () => {
    expect(AddBooking).toExist();
  });

  it('should call onAddBooking prop with valid data', () => {
    var spy = expect.createSpy();
    var addBooking = TestUtils.renderIntoDocument(<AddBooking onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addBooking));

    addBooking.refs.bookingName.value = 'Jimbo';
    addBooking.refs.bookingNumber.value = '0403768213';
    addBooking.refs.bookingDate.value = '03-04-2016';
    addBooking.refs.bookingTime.value = '9pm';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Jimbo', '0403768213', '03-04-2016', '9pm');
  });

  it('should not call onAddBooking prop with invalid data', () => {
    var spy = expect.createSpy();
    var addBooking = TestUtils.renderIntoDocument(<AddBooking onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addBooking));

    addBooking.refs.bookingName.value = '';
    addBooking.refs.bookingNumber.value = '0403768213';
    addBooking.refs.bookingDate.value = '03-04-2016';
    addBooking.refs.bookingTime.value = '9pm';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
