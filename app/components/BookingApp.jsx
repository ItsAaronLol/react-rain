var React = require('react');
var BookingList = require('BookingList')
var AddBooking = require('AddBooking');
var BookingSearch = require('BookingSearch');
var uuid = require('node-uuid');

var BookingApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      bookings: [
        {
          id: uuid(),
          name: 'Timothy',
          number: '0433928172',
          date: '20th June',
          time: '2pm',
          completed: false
        }, {
          id: uuid(),
          name: 'John',
          number: '0493829312',
          date: '24th June',
          time: '3pm',
          completed: true
        }, {
          id: uuid(),
          name: 'Bronson',
          number: '0438302932',
          date: '25t June',
          time: '5pm',
          completed: true
        }, {
          id: uuid(),
          name: 'Jimmy',
          number: '0493806911',
          date: '26th June',
          time: '8pm',
          completed: false
        }
      ]
    };
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
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id){
    var updatedBookings = this.state.bookings.map((booking) => {
      if(booking.id === id){
        booking.completed = !booking.completed;
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
    var {bookings} = this.state;
    return (
      <div>
        <BookingSearch onSearch = {this.handleSearch}/>
        <BookingList bookings={bookings} onToggle={this.handleToggle}/>
        <AddBooking onAddBooking={this.handleAddBooking}/>
      </div>
    )
  }
});

module.exports = BookingApp;
