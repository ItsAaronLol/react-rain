var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var BookingSearch = require('BookingSearch');

describe('BookingSearch', () => {
  it('should exist', () => {
    expect(BookingSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
      var searchText = 'Dog';
      var spy = expect.createSpy();
      var bookingSearch = TestUtils.renderIntoDocument(<BookingSearch onSearch = {spy}/>);
      var $el = $(ReactDOM.findDOMNode(bookingSearch));

      bookingSearch.refs.searchText.value = searchText;
      TestUtils.Simulate.change(bookingSearch.refs.searchText);
      expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

    it('should call onSearch with proper checked value', () => {
      var spy = expect.createSpy();
      var bookingSearch = TestUtils.renderIntoDocument(<BookingSearch onSearch = {spy}/>);
      var $el = $(ReactDOM.findDOMNode(bookingSearch));

      bookingSearch.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(bookingSearch.refs.searchText);
      expect(spy).toHaveBeenCalledWith(true, '');
    });
});
