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
          time: '2pm'
        }, {
          id: uuid(),
          name: 'John',
          number: '0493829312',
          date: '24th June',
          time: '3pm'
        }, {
          id: uuid(),
          name: 'Bronson',
          number: '0438302932',
          date: '25t June',
          time: '5pm'
        }, {
          id: uuid(),
          name: 'Jimmy',
          number: '0493806911',
          date: '26th June',
          time: '8pm'

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
          time: time
        }
      ]
    });
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
        <BookingList bookings={bookings}/>
        <AddBooking onAddTodo={this.handleAddBooking}/>
      </div>
    )
  }
});

module.exports = BookingApp;
