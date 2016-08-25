var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var BookingList = require('BookingList')
var AddBooking = require('AddBooking');
var BookingSearch = require('BookingSearch');
var BookingAPI = require('BookingAPI');

var BookingApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      bookings: BookingAPI.getBookings()
    };
  },
  componentDidUpdate: function () {
    BookingAPI.setBookings(this.state.bookings);
  },
  handleAddBooking: function(name, number, date, time){
    //alert('name: ' + name + ' | number: ' + number + ' | date: ' + date + ' | time: ' + time);
    this.setState({
      bookings: [
        ...this.state.bookings,
        {
          id: uuid(),
          name: name,
          number: number,
          date: date,
          time: time,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function(id){
    var updatedBookings = this.state.bookings.map((booking) => {
      if(booking.id === id){
        booking.completed = !booking.completed;
        booking.completedAt = booking.completed ? moment().unix() : undefined;
      }
      return booking;
    });
    this.setState({bookings: updatedBookings});
  },
  handleSearch: function (showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {bookings, showCompleted, searchText} = this.state;
    var filteredBookings = BookingAPI.filterBookings(bookings, showCompleted, searchText);
    return (
      <div>
        <BookingSearch onSearch = {this.handleSearch}/>
        <BookingList bookings={filteredBookings} onToggle={this.handleToggle}/>
        <AddBooking onAddBooking={this.handleAddBooking}/>
      </div>
    )
  }
});

module.exports = BookingApp;
