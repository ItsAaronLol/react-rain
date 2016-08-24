var React = require('react');
var BookingList = require('BookingList')
var AddBooking = require('AddBooking');
var BookingSearch = require('BookingSearch');

var BookingApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      bookings: [
        {
          id: 1,
          name: 'Timothy'
        }, {
          id: 2,
          name: 'John'
        }, {
          id: 3,
          name: 'Bronson'
        }, {
          id: 4,
          name: 'Jimmy'
        }
      ]
    };
  },
  handleAddBooking: function(name, number, date, time){
    alert('name: ' + name + ' | number: ' + number + ' | date: ' + date + ' | time: ' + time);
  },
  handleSearch: function (showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {bookings} = this.state;
    return (
      <div>
        <BookingSearch onSearch = {this.handleSearch}/>
        <BookingList bookings={bookings}/>
        <AddBooking onAddTodo={this.handleAddBooking}/>
      </div>
    )
  }
});

module.exports = BookingApp;
