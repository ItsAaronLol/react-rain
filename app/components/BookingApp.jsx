var React = require('react');
var BookingList = require('BookingList')
var AddBooking = require('AddBooking');

var BookingApp = React.createClass({
  getInitialState: function () {
    return {
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
  render: function () {
    var {bookings} = this.state;
    return (
      <div>
        <BookingList bookings={bookings}/>
        <AddBooking onAddTodo={this.handleAddBooking}/>
      </div>
    )
  }
});

module.exports = BookingApp;
